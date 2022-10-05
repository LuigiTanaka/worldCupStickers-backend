import prisma from "../database/prisma";
import { IAuthType } from "../types/authType";

export async function getUserByEmail(email: string) {
    const user = await prisma.user.findUnique({ where: { email } });
    return user;
}

export async function getUserByUsername(username: string) {
    const user = await prisma.user.findUnique({ where: { username } });
    return user;
}

export async function insert(userData: IAuthType) {
    await prisma.user.create({ data: userData });
}

export async function findUserById(id: number) {
    const user = prisma.user.findUnique({ where: { id } });
    return user;
}
