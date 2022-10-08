import Joi from "joi";
import { ISignUpType } from "../types/authType";

const signUpSchema = Joi.object<ISignUpType>({
    username: Joi.string().max(25).required(),
    email: Joi.string().email().required(),
    pictureUrl: Joi.string().allow(null),
    password: Joi.string().required(),
    confirmPassword: Joi.string().required().valid(Joi.ref("password")),
});

export default signUpSchema;
