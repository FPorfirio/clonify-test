import { useGetPostsQuery } from "../posts/postApi";
import { PostList, PostForm } from "../posts/posts";
import { useDisclosure } from "@chakra-ui/react";
import { LoginModal } from "../auth/auth";
import { selectIsAuthenticated } from "../auth/authSlice";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export const Home = () => {
  const { data: posts, isFetching } = useGetPostsQuery();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    <main className="bg-gradient-to-r from-gray-300 overflow-hidden to-bl to-blue-400">
      <div className="border-8 flex ml-20 mt-4 w-11/12">
        {posts && <PostList posts={posts} />}
        {<PostForm />}
        <LoginModal
          isOpen={!isAuthenticated}
          onOpen={onOpen}
          onClose={onClose}
        />
      </div>
    </main>
  );
};
