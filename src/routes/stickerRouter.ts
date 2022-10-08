import { Router } from "express";
import { validateToken } from "../middlewares/validateToken";
import { getAllGroups } from "../controllers/stickerController";

const stickerRouter = Router();

stickerRouter.use(validateToken);
stickerRouter.get("/stickers/groups", getAllGroups);

export default stickerRouter;
