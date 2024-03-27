import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../axiosSettings";

const API_ENDPOINTS = "/drugs";

export const drugsApi = createApi({
  reducerPath: "drugs",
  baseQuery: axiosBaseQuery(),
  tagTypes: ["drugs"],
  endpoints: (builder) => ({
    getDrugs: builder.query({
      query: ({ shop = "", sort = "" }) => ({
        url: API_ENDPOINTS,
        params: { shop, sort },
      }),
      providesTags: "drugs",
    }),
    getDrugsShops: builder.query({
      query: () => ({ url: `${API_ENDPOINTS}/shops` }),
    }),
  }),
});

export const { useGetDrugsQuery, useGetDrugsShopsQuery } = drugsApi;
