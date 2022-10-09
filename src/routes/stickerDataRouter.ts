import { Router } from "express";
import { validateToken } from "../middlewares/validateToken";
import {
    getGeneralStickerData,
    getGroupStickerData,
} from "../controllers/stickerDataControler";

const stickerDataRouter = Router();

stickerDataRouter.use(validateToken);
stickerDataRouter.get("/stickers-data", getGeneralStickerData);
stickerDataRouter.get("/stickers-data/groups/:groupId", getGroupStickerData);

export default stickerDataRouter;
