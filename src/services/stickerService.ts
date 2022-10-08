import * as stickerRepository from "../repositories/stickerRepository";

export async function getAllGroups() {
    const groups = await stickerRepository.getAllGroups();
    return groups;
}
