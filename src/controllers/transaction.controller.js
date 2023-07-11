import db from "../database/mongoDB.js";
import { ObjectId } from "mongodb";
import { stripHtml } from "string-strip-html";

const listTransactions = async(req, res) => {
    const userID = res.locals.userId;
    try {
        const user = await db.collection("users").findOne({_id: userID});
        if (!user) return res.status(404).send("User not found");
        const transactions = await db.collection("transactions").find({userID}).sort({$natural: -1}).toArray();
        res.send(transactions);
    } catch (err) {
        res.status(500).send(err.message);
    }
}