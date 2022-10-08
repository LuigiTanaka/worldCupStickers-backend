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
