import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Post, User, PostComment } from './types/types';

const baseUrl = import.meta.env.VITE_API_URL;

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => '/posts',
    }),
    getPost: builder.query<Post, number>({
      query: (postId) => `/posts/${postId}`,
    }),
    getUsers: builder.query<User[], void>({ query: () => '/users' }),
    getComments: builder.query<PostComment[], void>({
      query: () => '/comments',
    }),
    createPost: builder.mutation<Post, Post>({
      query: (post) => ({ url: '/posts', method: 'POST', body: post }),
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostQuery,
  useGetUsersQuery,
  useGetCommentsQuery,
  useCreatePostMutation,
} = apiSlice;
