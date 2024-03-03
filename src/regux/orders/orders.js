import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../axiosSettings";

const API_ENDPOINTS = "/orders";

export const ordersApi = createApi({
  reducerPath: "orders",
  baseQuery: axiosBaseQuery(),
  tagTypes: ["orders"],
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (body) => ({
        url: API_ENDPOINTS,
        method: "POST",
        data: body,
      }),
      invalidatesTags: "orders",
    }),
  }),
});

export const { useCreateOrderMutation } = ordersApi;
