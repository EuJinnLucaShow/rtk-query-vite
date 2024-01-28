import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BEARER = import.meta.env.VITE_BEARER;

export const themoviApi = createApi({
  reducerPath: 'themoviApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3/',
    prepareHeaders: (headers) => {      
      headers.set('Authorization', `Bearer ${BEARER}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getThemoviByTime: builder.query({
      query: ({ time, type }) => `trending/${type}/${time}`,
    }),
  }),
});

export const { useGetThemoviByTimeQuery } = themoviApi;
