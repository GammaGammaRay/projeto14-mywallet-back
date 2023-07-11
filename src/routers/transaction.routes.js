import { Router } from "express";
import {
  addTransaction,
  listTransactions,
} from "../controllers/transaction.controller.js";
import { transaction_schema } from "../schemas/transaction.schema.js";
import validateRequest from "../middleware/validateRequest.js";

const transactionRouter = Router();

transactionRouter.get("/transactions", listTransactions);

transactionRouter.post(
  "/addTransaction/",
  validateRequest(transaction_schema),
  addTransaction
);

export default transactionRouter;
