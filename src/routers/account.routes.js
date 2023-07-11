import { Router } from "express";
import { signIn,signOut,signUp } from "../controllers/account.controller.js";
import { signIn_schema, signUp_schema } from "../schemas/account.schema.js";
import validateRequest from "../middleware/validateRequest.js";
import validateAccount from "../middleware/validateAccount.js";


const accountRouter = Router();

accountRouter.post("/sign-in", validateRequest(signIn_schema), signIn);
accountRouter.post("/sign-up", validateRequest(signUp_schema), signUp);

accountRouter.use(validateAccount);

accountRouter.delete("/sign-out", signOut);

export default accountRouter;
