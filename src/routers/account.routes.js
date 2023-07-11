import { Router } from "express";
import { signIn,signOut,signUp } from "../controllers/account.controller.js";
import { signIn_schema, signUp_schema } from "../schemas/account.schema.js";
import validateRequest from "../middleware/validateRequest.js";
import validateAccount from "../middleware/validateAccount.js";


const accountRouter = Router();

userRouter.post("/sign-in", validateRequest(signIn_schema), signIn);
userRouter.post("/sign-up", validateRequest(signUp_schema), signUp);

userRouter.use(validateAccount);

userRouter.delete("/sign-out", signOut);

export default accountRouter;
