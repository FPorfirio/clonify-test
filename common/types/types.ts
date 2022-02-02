import { ObjectId } from "mongoose";
import { NextApiResponse } from "next";

export interface PostEntity {
  title: string;
  content: string;
  imgUrl: string;
  id?: ObjectId;
}

export interface UserEntity {
  username: string;
  name: string;
  passwordHash: string;
  id?: ObjectId;
}

export interface SessionEntity {
  username: string;
  UUID: ObjectId;
}

export interface CookiesOptions {
  httpOnly: boolean;
  secure: boolean;
  sameSite: "lax" | "string" | "none";
  maxAge: number;
}

export type loginResponse = Pick<UserEntity, "name" | "id" | "username">;

export interface AuthSliceState {
  user?: Pick<UserEntity, "username" | "name" | "id"> | null;
  authenticated?: boolean;
}

export type UserResponse = Pick<
  UserEntity,
  "name" | "username" | "passwordHash"
> & { _id: ObjectId };
