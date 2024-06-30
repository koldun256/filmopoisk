import { configureStore } from "@reduxjs/toolkit";
import { api } from "./services/api";
import { setupListeners } from "@reduxjs/toolkit/query";
import { useDispatch, useSelector, useStore } from "react-redux";
import authSlice, { authMiddleware } from "./features/auth/authSlice";
import scoreSlice, { scoreMiddleware } from "./features/score/scoreSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authSlice,
    score: scoreSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(api.middleware)
      .concat(scoreMiddleware)
      .concat(authMiddleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type Store = typeof store;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<typeof store>();
export default store;
