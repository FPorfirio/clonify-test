import nc from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";
import { NextHandler } from "next-connect";
import { dbConnect } from "../middleware/dbConnect";

export function createHandler(...middleware: NextHandler[]) {
  return nc<NextApiRequest, NextApiResponse>({
    onError: (err, req, res, next) => {
      res.status(500).end("Something broke!");
    },
    onNoMatch: (req, res, next) => {
      res.status(404).end("Page is not found");
    },
  }).use(dbConnect, ...middleware);
}
