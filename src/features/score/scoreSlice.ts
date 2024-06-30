"use client";
import { createListenerMiddleware, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { api } from "../../services/api";

export type Score = 1 | 2 | 3 | 4 | 5;
type State = Record<number, Score | null>;

function readStorage() {
  return {};
  // const ans: State = {};
  // for (let key in localStorage) {
  //   if (key.split(".").length != 2) continue;
  //   const [word1, word2] = key.split(".");
  //   if (word1 == "score")
  //     ans[parseInt(word2)] = parseInt(localStorage.getItem(key)!) as Score;
  // }
  // return ans;
}

type SetScoreAction = { payload: { id: number; score: Score | null } };
const scoreSlice = createSlice({
  name: "score",
  initialState: readStorage() as State,
  reducers: {
    setScore(state: State, action: SetScoreAction) {
      state[action.payload.id] = action.payload.score;
    },
  },
});

export const selectScore = (id: number) => (state: RootState) =>
  state.score[id];
export const { setScore } = scoreSlice.actions;
export default scoreSlice.reducer;

const storageListener = createListenerMiddleware();
storageListener.startListening({
  actionCreator: scoreSlice.actions.setScore,
  effect: async (action: SetScoreAction, listenerApi) => {
    if (action.payload.score != null)
      listenerApi.dispatch(
        api.endpoints.rateMovie.initiate({
          movieId: action.payload.id,
          user_rate: action.payload.score,
        })
      );
    // localStorage.setItem(
    //   `score.${action.payload.id}`,
    //   action.payload.score?.toString() ?? ""
    // );
  },
});

export const scoreMiddleware = [storageListener.middleware];
