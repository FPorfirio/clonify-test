import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
  UUID: mongoose.Schema.Types.ObjectId,
  username: {
    type: String,
    unique: true,
    required: true,
  },
  createdAt: { type: Date, default: Date.now, index: { expires: "15d" } },
});

export const Session =
  mongoose.models.Session || mongoose.model("Session", sessionSchema);
