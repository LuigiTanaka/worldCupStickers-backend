import { Request, Response } from "express";

import * as stickerDataService from "../services/stickerDataService";

export async function getSumOwnerStickers(req: Request, res: Response) {
    const { userId } = res.locals;

    const sumOwner = await stickerDataService.getSumOwnerStickers(
        Number(userId)
    );

    res.status(200).send(sumOwner);
}

export async function getSumRepeatedStickers(req: Request, res: Response) {
    const { userId } = res.locals;

    const sumRepeated = await stickerDataService.getSumRepeatedStickers(
        Number(userId)
    );

    res.status(200).send(sumRepeated);
}
