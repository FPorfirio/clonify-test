import { createHandler } from "../../../server/utils/nextConnect";
import { Post } from "../../../server/models/models";
import { PostEntity } from "../../../common/types/types";

const handler = createHandler();

handler
  .get(async (req, res) => {
    const posts = await Post.find({});
    if (!posts) {
      return res.status(404);
    }

    return res.status(200).json(posts);
  })

  .post(async (req, res) => {
    const body = req.body as PostEntity;
    console.log(body);
    const newPost = new Post({
      title: body.title,
      content: body.content,
      imgUrl: body.imgUrl,
    });

    const savedPost = await newPost.save();
    if (!savedPost) {
      return res.status(404);
    }

    res.status(200).json(savedPost);
  })

  .put(async (req, res) => {});

export default handler;
