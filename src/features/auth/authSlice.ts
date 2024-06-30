import {
  AsyncThunk,
  createAsyncThunk,
  createListenerMiddleware,
  createSlice,
} from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../../store";

export enum LoginStatus {
  LoggedOut,
  LoggedIn,
  Failed,
  Pending,
}

type State = {
  token: string | null;
  status: LoginStatus;
};

const savedToken = localStorage.getItem("token");
const initialState: State = savedToken
  ? { token: savedToken, status: LoginStatus.LoggedIn }
  : { token: null, status: LoginStatus.LoggedOut };

type Creds = { username: string; password: string };
export const login: AsyncThunk<string, Creds, any> = createAsyncThunk<
  string,
  Creds
>("auth/login", async (creds: Creds) => {
  const response = await fetch("http://localhost:3030/api/v1/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(creds),
  });
  if (!response.ok) throw Error("invalid credentails");
  const { token } = await response.json();
  return token;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut(state: State) {
      state.token = null;
      state.status = LoginStatus.LoggedOut;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state) => {
        state.status = LoginStatus.Pending;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = LoginStatus.LoggedIn;
        state.token = action.payload;
      })
      .addCase(login.rejected, (state) => {
        state.status = LoginStatus.Failed;
      });
  },
});

const authStorageListener = createListenerMiddleware();
authStorageListener.startListening.withTypes<RootState, AppDispatch>()({
  predicate: (_, currentState, originalState) =>
    currentState.auth.token != originalState.auth.token,
  effect: (_, listenerApi) => {
    const { token } = listenerApi.getState().auth;
    localStorage.setItem("token", token || "");
  },
});

export const authMiddleware = [authStorageListener.middleware];
export const { logOut } = authSlice.actions;
export default authSlice.reducer;

export const selectLoggedIn = (state: RootState) =>
  state.auth.status == LoginStatus.LoggedIn;
export const selectStatus = (state: RootState) => state.auth.status;
