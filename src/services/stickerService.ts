import * as stickerRepository from "../repositories/stickerRepository";

export async function getAllGroups() {
    const groups = await stickerRepository.getAllGroups();
    return groups;
}

export async function getCategoriesByGroupId(groupId: number) {
    const categories = await stickerRepository.getCategoriesByGroupId(groupId);
    return categories;
}
