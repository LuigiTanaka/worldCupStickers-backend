import * as authRepository from "../repositories/authRepository";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { IAuthType } from "../types/authType";
import { conflictError, unauthorizedError } from "../utils/errorUtils";

dotenv.config();

export async function signUp(
    username: string,
    pictureUrl: string | null,
    email: string,
    password: string
) {
    const existingUser = await authRepository.getUserByEmail(email);

    if (existingUser) {
        throw conflictError("email already registered");
    }

    const SALT = Number(process.env.SALT) || 10;
    const passwordHash = bcrypt.hashSync(password, SALT);

    const userData: IAuthType = {
        username,
        email,
        password: passwordHash,
        pictureUrl,
    };

    await authRepository.insert(userData);
}

export async function signIn(email: string, password: string) {
    const existingUser = await authRepository.getUserByEmail(email);

    if (!existingUser) {
        throw unauthorizedError("incorrect email or password");
    }

    const correctPassword = bcrypt.compareSync(password, existingUser.password);

    if (!correctPassword) {
        throw unauthorizedError("incorrect email or password");
    }

    const jwtSecret = process.env.JWT_SECRET || "secret";

    const token = jwt.sign({ id: existingUser.id }, jwtSecret);

    return {
        userData: {
            username: existingUser.username,
            pictureUrl: existingUser.pictureUrl,
        },
        token,
    };
}

export async function findUserById(id: number) {
    const user = authRepository.findUserById(id);
    return user;
}
