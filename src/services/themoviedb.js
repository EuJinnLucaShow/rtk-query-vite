import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BEARER = import.meta.env.VITE_BEARER;
const BASE_URL = import.meta.env.VITE_URL;

export const themoviApi = createApi({
  reducerPath: 'themoviApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
    prepareHeaders: headers => {
      headers.set('Authorization', `Bearer ${BEARER}`);
      return headers;
    },
  }),
  endpoints: builder => ({
    getTrending: builder.query({
      query: ({ type, time, page }) => `trending/${type}/${time}?page=${page}`,
    }),
  }),
});

export const { useGetTrendingQuery } = themoviApi;
