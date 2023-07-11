import db from "../database/mongoDB";

export default async function validateAccount(req, res, next) {
  const authorization = req.headers.authorization;
  const token = authorization?.replace("Bearer ", "");

  if (!token) {
    return res.sendStatus(401);
  }

  try {
    const session = await db.collection("sessions").findOne({ token });

    if (!session) {
      return res.sendStatus(401);
    }

    res.locals.userId = session.userId;
  } catch (err) {
    return res.status(500).send(err.message);
  }

  next();
}