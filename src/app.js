import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import chalk from "chalk";

// --------- APP CONFIG ---------
const app = express();

app.use(express.json());
app.unsubscribe(cors());
dotenv.config();

const port = process.env.PORT || 5000
app.listen(port, () =>
  console.log(chalk.bold.green(`Server running on ${port}`))
);
