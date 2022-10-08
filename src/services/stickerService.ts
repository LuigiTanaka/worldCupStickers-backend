import * as stickerRepository from "../repositories/stickerRepository";
import {
    IStickerWithQuantityType,
    IQuantityType,
    IIdType,
} from "../types/stickerType";
import { notFoundError } from "../utils/errorUtils";

export async function getAllGroups() {
    const groups = await stickerRepository.getAllGroups();
    return groups;
}

export async function getCategoriesByGroupId(groupId: number) {
    const group = await stickerRepository.getGroupById(groupId);

    if (!group) {
        throw notFoundError("group doesn't exist");
    }

    const categories = await stickerRepository.getCategoriesByGroupId(groupId);
    return categories;
}

export async function getStickersWithQuantityByCategoryId(
    categoryId: number,
    userId: number
) {
    const category = await stickerRepository.getCategoryById(categoryId);

    if (!category) {
        throw notFoundError("category doesn't exist");
    }

    const user = await stickerRepository.getUserById(userId);

    if (!user) {
        throw notFoundError("user doesn't exist");
    }

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
    const sticker = await stickerRepository.getStickerById(stickerId);

    if (!sticker) {
        throw notFoundError("sticker doesn't exist");
    }

    const user = await stickerRepository.getUserById(userId);

    if (!user) {
        throw notFoundError("user doesn't exist");
    }

    const stickerUserData = {
        userId,
        stickerId,
    };

    await stickerRepository.insertStickerUser(stickerUserData);
}

export async function deleteStickerUser(userId: number, stickerId: number) {
    const sticker = await stickerRepository.getStickerById(stickerId);

    if (!sticker) {
        throw notFoundError("sticker doesn't exist");
    }

    const user = await stickerRepository.getUserById(userId);

    if (!user) {
        throw notFoundError("user doesn't exist");
    }

    const stickerUserId: IIdType | undefined =
        await stickerRepository.getStickerUserByIds(userId, stickerId);

    if (!stickerUserId) {
        throw notFoundError("user doesn't have this stickers");
    }

    await stickerRepository.deleteStickerUser(userId, stickerId);
}
