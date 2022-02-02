import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import { NextHandler } from "next-connect";

declare global {
  var mongooseCache: typeof mongoose;
}
const MONGODB_URI = process.env.MONGODB_URI!;

export const dbConnect = async (
  req: NextApiRequest,
  res: NextApiResponse,
  next: NextHandler
) => {
  try {
    if (!global.mongooseCache) {
      const a = await mongoose.connect(MONGODB_URI);
    }
  } catch (ex) {
    console.error(ex);
  }

  return next();
};
