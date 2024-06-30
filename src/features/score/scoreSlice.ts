import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export type Score = 1 | 2 | 3 | 4 | 5;
type State = Record<number, Score>;
type SetScoreAction = { payload: { id: number; score: Score } };
const scoreSlice = createSlice({
  name: "score",
  initialState: {} as State,
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
