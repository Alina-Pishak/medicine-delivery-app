import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../axiosSettings";

const API_ENDPOINTS = "/drugs";

export const drugsApi = createApi({
  reducerPath: "drugs",
  baseQuery: axiosBaseQuery(),
  tagTypes: ["drugs"],
  endpoints: (builder) => ({
    getDrugs: builder.query({
      query: () => ({ url: API_ENDPOINTS }),
      providesTags: "drugs",
    }),
  }),
});

export const { useGetDrugsQuery } = drugsApi;
