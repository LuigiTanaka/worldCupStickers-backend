import prisma from "../database/prisma";
import { IQuantityType, IStickerUserType } from "../types/stickerType";

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

export async function getStickersByCategoryId(categoryId: number) {
    const stickers = await prisma.sticker.findMany({
        where: { categoryId },
    });
    return stickers;
}

export async function findStickerUser(stickerId: number, userId: number) {
    const quantity: IQuantityType[] = await prisma.$queryRaw`
        SELECT quantity FROM "stickersUsers" WHERE "stickerId"=${stickerId} AND "userId"=${userId}
    `;
    return quantity[0];
}

export async function insertStickerUser(stickerUserData: IStickerUserType) {
    await prisma.stickerUser.create({ data: stickerUserData });
}
