import * as stickerDataRepository from "../repositories/stickerDataRepository";

export async function getSumOwnerStickers(userId: number) {
    const sumOwner = await stickerDataRepository.getSumOwnerStickers(userId);

    return { sumOwner: sumOwner.length };
}

export async function getSumRepeatedStickers(userId: number) {
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
