import * as stickerDataRepository from "../repositories/stickerDataRepository";
import * as stickerRepository from "../repositories/stickerRepository";
import { notFoundError } from "../utils/errorUtils";

export async function getSumAllStickers() {
    const sumAllByCategory =
        await stickerDataRepository.getSumAllStickersByCategories();

    let sumAll = 0;
    sumAllByCategory.forEach((obj) => {
        sumAll += obj._count.name;
    });

    return { sumAll };
}

export async function getSumOwnerStickers(userId: number) {
    const user = await stickerRepository.getUserById(userId);

    if (!user) {
        throw notFoundError("user doesn't exist");
    }

    const sumOwner = await stickerDataRepository.getSumOwnerStickers(userId);

    return { sumOwner: sumOwner.length };
}

export async function getSumRepeatedStickers(userId: number) {
    const user = await stickerRepository.getUserById(userId);

    if (!user) {
        throw notFoundError("user doesn't exist");
    }

    const sumOwner = await stickerDataRepository.getSumOwnerStickers(userId);

    let sumRepeated = 0;
    sumOwner.forEach((obj) => {
        const quantity = obj._sum.quantity;
        if (quantity && quantity > 1) {
            sumRepeated += quantity - 1;
        }
    });

    return { sumRepeated };
}
