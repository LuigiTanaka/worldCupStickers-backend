import { Request, Response, NextFunction } from "express";
import { IJwtPayload } from "../types/authType";
import { unauthorizedError } from "../utils/errorUtils";
import * as authService from "../services/authService";

import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export async function validateToken(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const { authorization } = req.headers;

    if (!authorization) {
        throw unauthorizedError("missing authorization header");
    }

    const token = authorization.replace("Bearer ", "");

    if (!token) {
        throw unauthorizedError("required token");
    }

    try {
        const jwtSecret = process.env.JWT_SECRET || "secret";
        const { id } = jwt.verify(token, jwtSecret) as IJwtPayload;
        const user = await authService.findUserById(Number(id));

        if (!user) {
            throw unauthorizedError("invalid token");
        }

        res.locals.userId = user.id;

        next();
    } catch {
        throw unauthorizedError("invalid token");
    }
}
