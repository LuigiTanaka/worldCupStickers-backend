import * as stickerDataRepository from "../repositories/stickerDataRepository";
import * as stickerRepository from "../repositories/stickerRepository";
import { notFoundError } from "../utils/errorUtils";

export async function getGeneralStickerData(userId: number) {
    const sumAll = await getSumAllStickers();
    const sumOwner = await getSumOwnerStickers(userId);
    const sumRepeated = await getSumRepeatedStickers(userId);

    return {
        sumAll,
        sumOwner,
        sumRepeated,
    };
}

export async function getGroupStickerData(userId: number, groupId: number) {
    const sumAllGroup = await getSumAllGroupStickers(groupId);
    const sumOwnerGroup = await getSumOwnerGroupStickers(userId, groupId);

    return {
        sumAllGroup,
        sumOwnerGroup,
    };
}

export async function getSumOwnerGroupStickers(
    userId: number,
    groupId: number
) {
    const owner = await stickerDataRepository.getOwnerGroupStickers(
        userId,
        groupId
    );

    return owner.length;
}

export async function getSumAllGroupStickers(groupId: number) {
    const all = await stickerDataRepository.getAllGroupStickers(groupId);

    return all.length;
}

async function getSumAllStickers() {
    const sumAllByCategory =
        await stickerDataRepository.getSumAllStickersByCategories();

    let sumAll = 0;
    sumAllByCategory.forEach((obj) => {
        sumAll += obj._count.name;
    });

    return sumAll;
}

async function getSumOwnerStickers(userId: number) {
    const user = await stickerRepository.getUserById(userId);

    if (!user) {
        throw notFoundError("user doesn't exist");
    }

    const sumOwner = await stickerDataRepository.getSumOwnerStickers(userId);

    return sumOwner.length;
}

async function getSumRepeatedStickers(userId: number) {
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

    return sumRepeated;
}
