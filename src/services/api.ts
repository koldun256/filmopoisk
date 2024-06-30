import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { FullMovieInfo, ShortMovieInfo } from "../models/movie";
import { GenresEnglish } from "../models/movie";
import { RootState } from "../store";

export type SearchQuery = {
  title?: string;
  genre?: GenresEnglish;
  release_year?: string;
  sort_by: "release_year" | "title" | "rating";
  order: "asc" | "desc";
  page: number;
  limit: number;
};

export type SearchResponse = {
  search_result: ShortMovieInfo[];
  total_pages: number;
};

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3030/api/v1/",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) headers.set("Authorization", `Bearer ${token}`);
    return headers;
  },
});

export const api = createApi({
  reducerPath: "api",
  baseQuery,
  endpoints: (builder) => ({
    getMovieById: builder.query<FullMovieInfo, string>({
      query: (id) => `movie/${id}`,
    }),
    search: builder.query<SearchResponse, SearchQuery>({
      query: (params) => ({
        url: `search/`,
        params,
      }),
    }),
  }),
});
