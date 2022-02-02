import { PostEntity } from "../../common/types/types";
import { PostCard } from "./PostCard";

export const PostList = ({ posts }: { posts: PostEntity[] }) => {
  return (
    <div className="bg-white w-fit px-10">
      <section className="font-serif mb-16 px-2 py-2 self-stretch text-6xl text-gray-600">
        <h1 className="text-left">Latest Post</h1>
      </section>
      <section className="flex flex-col gap-6">
        {posts.map((post) => (
          <PostCard post={post} key={post.title} />
        ))}
      </section>
    </div>
  );
};
