import Joi from "joi";
import { ISignInType } from "../types/authType";

const signInSchema = Joi.object<ISignInType>({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});

export default signInSchema;
