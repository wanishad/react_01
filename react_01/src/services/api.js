import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const Api = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/v1/",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    fetchAllpost: builder.query({
      query: () => ({
        url: "post/fetch-all-post",
        method: "GET",
      }),
    }),
    loginUser: builder.mutation({
      query: (body) => ({
        url: "user/login",
        method: "POST",
        body: body,
      }),
    }),
    signupUser: builder.mutation({
      query: (body) => ({
        url: "user/register",
        method: "POST",
        body: body,
      }),
    }),
    createPost: builder.mutation({
      query: (body) => ({
        url: "post/create-post",
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const {
  useFetchAllpostQuery,
  useLoginUserMutation,
  useSignupUserMutation,
  useCreatePostMutation
} = Api;
