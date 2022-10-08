import * as stickerRepository from "../repositories/stickerRepository";
import { IStickerWithQuantityType, IQuantityType } from "../types/stickerType";

export async function getAllGroups() {
    const groups = await stickerRepository.getAllGroups();
    return groups;
}

export async function getCategoriesByGroupId(groupId: number) {
    const categories = await stickerRepository.getCategoriesByGroupId(groupId);
    return categories;
}

export async function getStickersWithQuantityByCategoryId(
    categoryId: number,
    userId: number
) {
    const stickers = await stickerRepository.getStickersByCategoryId(
        categoryId
    );

    const stickersWithQuantity: IStickerWithQuantityType[] = [];

    for (const [idx, sticker] of stickers.entries()) {
        const stickerId = sticker.id;

        const quantity: IQuantityType | undefined =
            await stickerRepository.findStickerUser(stickerId, userId);

        if (!quantity) {
            stickersWithQuantity.push({ ...sticker, quantity: 0 });
        } else {
            stickersWithQuantity.push({
                ...sticker,
                quantity: quantity.quantity,
            });
        }
    }

    return stickersWithQuantity;
}

export async function createStickerUser(userId: number, stickerId: number) {
    const stickerUserData = {
        userId,
        stickerId,
    };

    await stickerRepository.insertStickerUser(stickerUserData);
}
