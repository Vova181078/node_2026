import Joi from "joi";

export const updateAndCreateUserValidator = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    age: Joi.number().min(0).required(),
    password: Joi.string().min(8).required(),
});
