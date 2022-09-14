import type { NextPage } from "next";
import { Home } from "../features/home/home";
import { wrapper } from "../app/store";
import { postApi } from "../features/posts/postApi";
import { blogApi } from "../services/services";
import { LayoutHeader } from "../common/layout/layout";

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  store.dispatch(postApi.endpoints.getPosts.initiate());
  await Promise.all(blogApi.util.getRunningOperationPromises());

  return {
    props: {},
  };
});

const HomeView: NextPage = () => {
  return (
    <LayoutHeader>
      <Home />
    </LayoutHeader>
  );
};

export default HomeView;
