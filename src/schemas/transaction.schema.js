import Joi from "joi";

const transaction_schema = Joi.object({
  description: Joi.string().required(),
  amount: Joi.number().precision(2).greater(0).required(),
  type: Joi.any().valid("entrada", "saida").required(),
});

export { transaction_schema };
