import { createHandler } from "../../server/utils/nextConnect";
import { User, Session } from "../../server/models/models";
import { UserResponse } from "../../common/types/types";
import { serialize } from "cookie";
import bcrypt from "bcrypt";
const handler = createHandler();

handler.post(async (req, res) => {
  const { password, username } = req.body;
  console.log(password, username);
  const user = (await User.findOne({ username: username })) as UserResponse;
  const passwordHash = user?.passwordHash;
  const passwordCheck = await bcrypt.compare(password, passwordHash);

  if (!(user && passwordCheck)) {
    return res.status(401).json({
      error: "invalid username or password",
    });
  }

  const userInfo = {
    name: user.name,
    id: user._id,
  };

  const newSession = {
    UUID: user._id,
    username: user?.username,
  };
  const a = await Session.findOneAndReplace({ UUID: user._id }, newSession);

  res.setHeader(
    "Set-Cookie",
    serialize("session", JSON.stringify(newSession), {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 14 * 24 * 3600000,
    })
  );
  res.status(200).send({ userInfo });
});

export default handler;
