import { Request, Response, NextFunction } from "express";
import {
    AppError,
    isAppError,
    errorTypeToStatusCode,
} from "../utils/errorUtils";

export function errorMiddleware(
    err: Error | AppError,
    req: Request,
    res: Response,
    next: NextFunction
) {
    console.log(err);

    if (isAppError(err)) {
        return res.status(errorTypeToStatusCode(err.type)).send(err.message);
    }

    return res.status(500).send("Internal server error");
}
