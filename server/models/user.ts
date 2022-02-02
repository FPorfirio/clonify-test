import mongoose from "mongoose";
import { UserEntity } from "../../common/types/types";
import { ObjectId, Schema } from "mongoose";

const userSchema = new Schema<UserEntity>({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  name: String,
  passwordHash: String,
});

userSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

export const User =
  mongoose.models.User || mongoose.model<UserEntity>("User", userSchema);
