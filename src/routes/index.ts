import { Router } from "express";

import authRouter from "./authRouter";
import stickerRouter from "./stickerRouter";

const router = Router();

router.get("/", (req, res) => {
    res.send("Online");
});

router.use(authRouter);
router.use(stickerRouter);

export default router;
