import { User } from "@prisma/client";

export type IAuthType = Omit<User, "id">;

export interface ISignUpType {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    pictureUrl?: string;
}

export interface ISignInType {
    email: string;
    password: string;
}

export interface IJwtPayload {
    id: number;
}
