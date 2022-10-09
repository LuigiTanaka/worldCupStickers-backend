import { Router } from "express";
import { validateToken } from "../middlewares/validateToken";
import updateStickerSchema from "../schemas/updateStickerSchema";
import {
    getAllGroups,
    getCategoriesByGroupId,
    getStickersWithQuantityByCategoryId,
    createStickerUser,
    deleteStickerUser,
    updateRepeated,
} from "../controllers/stickerController";
import { validateSchema } from "../middlewares/schemaValidator";

const stickerRouter = Router();

stickerRouter.use(validateToken);
stickerRouter.get("/stickers/groups", getAllGroups);
stickerRouter.get("/stickers/categories/:groupId", getCategoriesByGroupId);
stickerRouter.get("/stickers/:categoryId", getStickersWithQuantityByCategoryId);
stickerRouter.post("/stickers/:stickerId", createStickerUser);
stickerRouter.delete("/stickers/:stickerId", deleteStickerUser);
stickerRouter.put(
    "/stickers/:stickerId",
    validateSchema(updateStickerSchema),
    updateRepeated
);

export default stickerRouter;
