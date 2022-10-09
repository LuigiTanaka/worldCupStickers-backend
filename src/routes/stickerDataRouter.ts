import { Router } from "express";
import { validateToken } from "../middlewares/validateToken";
import {
    getSumAllStickers,
    getSumOwnerStickers,
    getSumRepeatedStickers,
} from "../controllers/stickerDataControler";

const stickerDataRouter = Router();

stickerDataRouter.use(validateToken);
stickerDataRouter.get("/stickers-data/all", getSumAllStickers);
stickerDataRouter.get("/stickers-data/owner", getSumOwnerStickers);
stickerDataRouter.get("/stickers-data/repeated", getSumRepeatedStickers);
//stickerDataRouter.get("/stickers-data/groups/all/:groupId", getSumAllByGroupId);
//stickerDataRouter.get("/stickers-data/groups/owner/:groupId", getSumOwnerByGroupId);
//stickerDataRouter.get("/stickers-data/categories/all/:categoryId", getSumAllByCategoryId);
//stickerDataRouter.get("/stickers-data/categories/owner/:categoryId", getSumOwnerByCategoryId);

export default stickerDataRouter;
