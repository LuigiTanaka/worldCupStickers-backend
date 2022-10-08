import { Router } from "express";
import { validateToken } from "../middlewares/validateToken";
import * as stickerController from "../controllers/stickerController";

const stickerRouter = Router();

stickerRouter.use(validateToken);
stickerRouter.get("/stickers/groups", stickerController.getAllGroups);
stickerRouter.get(
    "/stickers/categories/:groupId",
    stickerController.getCategoriesByGroupId
);
stickerRouter.get(
    "/stickers/:categoryId",
    stickerController.getStickersByCategoryId
);

export default stickerRouter;
