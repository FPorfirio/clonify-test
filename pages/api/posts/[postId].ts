import { createHandler } from "../../../server/utils/nextConnect";
import { Post } from "../../../server/models/models";
import { PostEntity } from "../../../common/types/types";

const handler = createHandler();

handler
  .put(async (req, res) => {
    const body = req.body as PostEntity;
    const { postId } = req.query;

    const updatedPost = await Post.findByIdAndUpdate(postId, body);
    if (!updatedPost) {
      return res.status(404);
    }

    return res.status(200).json(updatedPost);
  })

  .delete(async (req, res) => {
    const body = req.body as PostEntity;
    const { postId } = req.query;
    console.log(postId);

    const deletedPost = await Post.findByIdAndDelete(postId);
    if (!deletedPost) {
      return res.status(404);
    }

    return res.status(200);
  });

export default handler;
