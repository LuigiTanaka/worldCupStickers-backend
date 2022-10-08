import prisma from "../database/prisma";

export async function getAllGroups() {
    const groups = await prisma.group.findMany();
    return groups;
}

export async function getCategoriesByGroupId(groupId: number) {
    const categories = await prisma.category.findMany({
        where: { groupId },
    });
    return categories;
}
