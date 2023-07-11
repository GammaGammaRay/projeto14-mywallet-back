import db from "../database/mongoDB.js";
import { ObjectId } from "mongodb";

const addTransaction = async (req, res) => {
  const { description, amount, type } = req.body;
  try {
    const userId = res.locals.userId;
    await db.collection("transactions").insertOne({
      userId,
      description,
      amount,
      type,
      date: Date.now(),
    });
    res.sendStatus(201);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const listTransactions = async (req, res) => {
  try {
    const userID = res.locals.userId;
    const user = await db
      .collection("sessions")
      .findOne({ token: req.headers.authorization.replace("Bearer ", "") });
    console.log(user.userId);
    if (!user) return res.status(404).send("User not found");
    const transactions = await db
      .collection("transactions")
      .find({ userId: new ObjectId(user.userId) })
      .sort({ $natural: -1 })
      .toArray();
    res.send(transactions);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export { addTransaction, listTransactions };
