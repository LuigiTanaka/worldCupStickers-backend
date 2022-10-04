type AppErrorTypes =
    | "conflict"
    | "not_found"
    | "unauthorized"
    | "unprocessable_entity";

export interface AppError {
    type: AppErrorTypes;
    message: string;
}

export function isAppError(error: object): error is AppError {
    return (error as AppError).type !== undefined;
}

export function errorTypeToStatusCode(type: AppErrorTypes) {
    if (type === "conflict") return 409;
    if (type === "not_found") return 404;
    if (type === "unauthorized") return 401;
    if (type === "unprocessable_entity") return 422;
    return 400;
}

export function conflictError(message?: string): AppError {
    return { type: "conflict", message: message ?? "" };
}

export function notFoundError(message?: string): AppError {
    return { type: "not_found", message: message ?? "" };
}

export function unauthorizedError(message?: string): AppError {
    return { type: "unauthorized", message: message ?? "" };
}

export function unprocessableEntityError(message?: string): AppError {
    return { type: "unprocessable_entity", message: message ?? "" };
}
