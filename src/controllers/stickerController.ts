import { Request, Response } from "express";

import * as stickerService from "../services/stickerService";

export async function getAllGroups(req: Request, res: Response) {
    const groups = await stickerService.getAllGroups();

    res.status(200).send(groups);
}

export async function getCategoriesByGroupId(req: Request, res: Response) {
    const { groupId } = req.params;

    const categories = await stickerService.getCategoriesByGroupId(
        Number(groupId)
    );

    res.status(200).send(categories);
}

export async function getStickersWithQuantityByCategoryId(
    req: Request,
    res: Response
) {
    const { categoryId } = req.params;
    const { userId } = res.locals;

    const stickers = await stickerService.getStickersWithQuantityByCategoryId(
        Number(categoryId),
        Number(userId)
    );

    res.status(200).send(stickers);
}

export async function createStickerUser(req: Request, res: Response) {
    const { stickerId } = req.params;
    const { userId } = res.locals;

    await stickerService.createStickerUser(Number(userId), Number(stickerId));

    res.status(201).send(
        "relation between user and sticker created successfully"
    );
}

export async function deleteStickerUser(req: Request, res: Response) {
    const { stickerId } = req.params;
    const { userId } = res.locals;

    await stickerService.deleteStickerUser(Number(userId), Number(stickerId));

    res.status(200).send(
        "relation between user and sticker deleted successfully"
    );
}

export async function updateRepeated(req: Request, res: Response) {
    const { quantity } = req.body;
    const { stickerId } = req.params;
    const { userId } = res.locals;

    await stickerService.updateRepeated(
        Number(userId),
        Number(stickerId),
        Number(quantity)
    );

    res.status(200).send(
        "relation between user and sticker updated successfully"
    );
}
