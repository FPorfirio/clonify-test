import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: { type: String, unique: true },
    content: String,
    imgUrl: String,
  },
  { timestamps: true }
);

postSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

export const Post = mongoose.models.Post || mongoose.model("Post", postSchema);
