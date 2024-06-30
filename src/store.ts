import { configureStore } from "@reduxjs/toolkit";
import { api } from "./services/api";
import { setupListeners } from "@reduxjs/toolkit/query";
import { useDispatch, useSelector } from "react-redux";
import authSlice, { authMiddleware } from "./features/auth/authSlice";
import scoreSlice, { scoreMiddleware } from "./features/score/scoreSlice";

export const makeStore = () => {
  const store = configureStore({
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
  return store;
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const useAppDispatch = useDispatch;
export const useAppSelector = useSelector;
