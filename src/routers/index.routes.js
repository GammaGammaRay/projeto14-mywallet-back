import { Router } from "express";
import accountRouter from "./account.routes.js";
import transactionRouter from "./transaction.routes.js";

const router = Router();

router.use(accountRouter);
router.use(transactionRouter);

export default router;
