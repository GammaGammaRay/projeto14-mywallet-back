import { Router } from "express";
import accountRouter from "./account.routes.js";

const router = Router();

router.use(accountRouter);

export default router;
