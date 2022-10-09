import { equal } from "joi";
import prisma from "../database/prisma";

export async function getSumAllStickersByCategories() {
    const all = await prisma.sticker.groupBy({
        by: ["categoryId"],
        _count: {
            name: true,
        },
    });

    return all;
}

export async function getOwnerGroupStickers(userId: number, groupId: number) {
    const owner = await prisma.stickerUser.findMany({
        where: {
            userId: userId,
            sticker: {
                category: {
                    groupId: groupId,
                },
            },
        },
        select: {
            id: true,
        },
    });

    return owner;
}

export async function getAllGroupStickers(groupId: number) {
    const all = await prisma.sticker.findMany({
        where: {
            category: {
                groupId: groupId,
            },
        },
        select: {
            id: true,
        },
    });

    return all;
}

export async function getSumOwnerStickers(userId: number) {
    const sumOwner = await prisma.stickerUser.groupBy({
        by: ["stickerId"],
        where: {
            userId: {
                in: [userId],
            },
        },
        _sum: {
            quantity: true,
        },
    });

    return sumOwner;
}
