import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ShortMovieInfo } from "../models/movie";
import { GenresEnglish } from "../models/movie";

export type SearchQuery = Partial<{
  title: string;
  genre: GenresEnglish;
  release_year: string;
  sort_by: "release_year" | "title" | "rating";
  order: "asc" | "desc";
  page: number;
  limit: number;
}>;

export type SearchResponse = {
  search_result: ShortMovieInfo[];
  total_pages: number;
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3030/api/v1/" }),
  endpoints: (builder) => ({
    getMovieById: builder.query<ShortMovieInfo, string>({
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
