import prisma from "../database/prisma";

export async function getAllGroups() {
    const groups = await prisma.group.findMany();
    return groups;
}
