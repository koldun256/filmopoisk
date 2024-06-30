import { configureStore } from "@reduxjs/toolkit";
import { api } from "./services/api";
import { setupListeners } from "@reduxjs/toolkit/query";
import { useDispatch, useSelector, useStore } from "react-redux";
import searchSlice from "./features/search/searchSlice";
import authSlice from "./features/auth/authSlice";
import scoreSlice from "./features/score/scoreSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    search: searchSlice,
    auth: authSlice,
    score: scoreSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<typeof store>();
export default store;
