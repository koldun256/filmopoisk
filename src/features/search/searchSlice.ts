import { createSlice } from "@reduxjs/toolkit";
import { SearchQuery } from "../../services/api";
import { RootState } from "../../store";

type State = {
  searchQuery: SearchQuery;
};

const initialState: State = {
  searchQuery: {
    sort_by: "rating",
    order: "desc",
    page: 1,
    limit: 5,
  },
};

type SetAction<K extends keyof SearchQuery> = {
  payload: [K, SearchQuery[K]];
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchParam<P extends keyof SearchQuery>(
      state: State,
      action: SetAction<P>
    ) {
      state.searchQuery[action.payload[0]] = action.payload[1] || undefined;
    },
  },
});

export const { setSearchParam } = searchSlice.actions;
export const selectQuery = (state: RootState) => state.search.searchQuery;
export default searchSlice.reducer;
