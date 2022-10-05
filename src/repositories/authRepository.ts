import prisma from "../database/prisma";
import { IAuthType } from "../types/authType";

export async function getUserByEmail(email: string) {
    const user = await prisma.user.findUnique({ where: { email } });
    return user;
}

export async function insert(userData: IAuthType) {
    await prisma.user.create({ data: userData });
}
