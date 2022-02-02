import { blogApi } from "../../services/services";

export const authAPi = blogApi.injectEndpoints({
  endpoints: (build) => ({
    getAuth: build.query({
      query: () => "authorization",
    }),
    login: build.mutation({
      query: (credentials) => ({
        url: "login",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const { useGetAuthQuery, useLoginMutation } = authAPi;
