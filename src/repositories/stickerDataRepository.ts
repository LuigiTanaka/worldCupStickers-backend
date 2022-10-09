import { equal } from "joi";
import prisma from "../database/prisma";

export async function getSumAllStickersByCategories() {
    const sumAll = await prisma.sticker.groupBy({
        by: ["categoryId"],
        _count: {
            name: true,
        },
    });

    return sumAll;
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

    console.log(sumOwner);

    return sumOwner;
}
