import { Session } from "../../server/models/session";
import { createHandler } from "../../server/utils/nextConnect";
import { serialize, parse } from "cookie";
import { User } from "../../server/models/user";
import { UserResponse } from "../../common/types/types";

const handler = createHandler();

handler.get(async (req, res) => {
  const cookies = req.cookies;
  const { UUID, username } = JSON.parse(cookies.session);

  const session = await Session.findOneAndDelete({ UUID: UUID });
  if (session) {
    const newSession = new Session({
      UUID: UUID,
      username: username,
    });
    await newSession.save();

    const user = (await User.findById(UUID)) as UserResponse;
    const userInfo = {
      name: user.name,
      id: user._id,
    };

    res.setHeader(
      "Set-Cookie",
      serialize("session", session, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        maxAge: 14 * 24 * 3600000,
      })
    );
    return res.status(200).send(userInfo);
  }

  res.setHeader(
    "Set-Cookie",
    serialize("session", session, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 14 * 24 * 3600000,
    })
  );
  res.status(401).json({ error: "Unauthorized" });
});

export default handler;
