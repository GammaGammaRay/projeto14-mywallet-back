import joi from "joi";

const signUp_schema = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().min(3).required(),
});

const signIn_schema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(3).required(),
});

export { signUp_schema, signIn_schema };
