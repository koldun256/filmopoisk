import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ShortMovieInfo } from "./types";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3030/api/v1/" }),
  endpoints: (builder) => ({
    getMovieById: builder.query<ShortMovieInfo, string>({
      query: (id) => `movie/${id}`,
    }),
  }),
});

export const { useGetMovieByIdQuery } = moviesApi;
