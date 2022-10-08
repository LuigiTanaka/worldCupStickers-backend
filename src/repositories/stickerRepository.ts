import prisma from "../database/prisma";
import { IQuantityType, IStickerUserType, IIdType } from "../types/stickerType";

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

export async function findStickerUser(userId: number, stickerId: number) {
    const quantity: IQuantityType[] = await prisma.$queryRaw`
        SELECT quantity FROM "stickersUsers" WHERE "stickerId"=${stickerId} AND "userId"=${userId}
    `;
    return quantity[0];
}

export async function insertStickerUser(stickerUserData: IStickerUserType) {
    await prisma.stickerUser.create({ data: stickerUserData });
}

export async function deleteStickerUser(userId: number, stickerId: number) {
    await prisma.$queryRaw`
        DELETE FROM "stickersUsers" WHERE "stickerId"=${stickerId} AND "userId"=${userId}
    `;
}

export async function updateStickerUser(
    userId: number,
    stickerId: number,
    quantity: number
) {
    await prisma.$queryRaw`
        UPDATE "stickersUsers" SET quantity=${quantity} WHERE "stickerId"=${stickerId} AND "userId"=${userId}
    `;
}

export async function getUserById(userId: number) {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    return user;
}

export async function getGroupById(groupId: number) {
    const group = await prisma.group.findUnique({ where: { id: groupId } });
    return group;
}

export async function getCategoryById(categoryId: number) {
    const category = await prisma.category.findUnique({
        where: { id: categoryId },
    });
    return category;
}

export async function getStickerById(stickerId: number) {
    const sticker = await prisma.sticker.findUnique({
        where: { id: stickerId },
    });
    return sticker;
}

export async function getStickerUserByIds(userId: number, stickerId: number) {
    const stickerUserId: IIdType[] = await prisma.$queryRaw`
        SELECT id FROM "stickersUsers" WHERE "stickerId"=${stickerId} AND "userId"=${userId}
    `;
    return stickerUserId[0];
}
