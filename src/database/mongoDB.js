import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import chalk from "chalk";

dotenv.config();
const mongoClient = new MongoClient(process.env.DATABASE_URL);

try {
  await mongoClient.connect();
  console.log(chalk.bold.green("MongoDB OK"));
} catch (err) {
  console.log(chalk.bold.red(err.message));
}

const db = mongoClient.db();

export default db;
