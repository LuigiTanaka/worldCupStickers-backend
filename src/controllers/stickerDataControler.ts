import { Request, Response } from "express";

import * as stickerDataService from "../services/stickerDataService";

export async function getGeneralStickerData(req: Request, res: Response) {
    const { userId } = res.locals;

    const generalData = await stickerDataService.getGeneralStickerData(
        Number(userId)
    );

    res.status(200).send(generalData);
}

export async function getGroupStickerData(req: Request, res: Response) {
    const { groupId } = req.params;
    const { userId } = res.locals;

    const groupData = await stickerDataService.getGroupStickerData(
        Number(userId),
        Number(groupId)
    );

    res.status(200).send(groupData);
}
