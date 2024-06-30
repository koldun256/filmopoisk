import { AsyncThunk, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

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

const initialState: State = { token: null, status: LoginStatus.LoggedOut };
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
  return (await response.json()).token;
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

export const { logOut } = authSlice.actions;
export default authSlice.reducer;

export const selectLoggedIn = (state: RootState) =>
  state.auth.status == LoginStatus.LoggedIn;
export const selectStatus = (state: RootState) => state.auth.status;
