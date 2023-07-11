import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import chalk from "chalk";
import router from "./routers/index.routes";

// --------- APP CONFIG ---------
const app = express();

app.use(cors());
app.use(express.json());
app.use(router)
// dotenv.config();

const port = process.env.PORT || 5000
app.listen(port, () =>
  console.log(chalk.bold.green(`Server running on ${port}`))
);
