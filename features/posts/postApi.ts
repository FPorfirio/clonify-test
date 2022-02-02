import { blogApi } from "../../services/services";
import { PostEntity } from "../../common/types/types";

export const postApi = blogApi.injectEndpoints({
  endpoints: (build) => ({
    getPosts: build.query<PostEntity[], void>({
      query: () => "posts",
      providesTags: ["Post"],
    }),

    createPost: build.mutation({
      query: (newPost) => ({
        url: "posts",
        method: "POST",
        body: newPost,
      }),
      invalidatesTags: ["Post"],
    }),

    deletePost: build.mutation({
      query: (id) => ({
        url: `posts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Post"],
    }),

    updatePost: build.mutation({
      query: ({ id, ...newPost }) => ({
        url: `post/${id}`,
        method: "PUT",
        body: newPost,
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = postApi;
