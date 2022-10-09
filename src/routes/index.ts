import { Router } from "express";

import authRouter from "./authRouter";
import stickerRouter from "./stickerRouter";
import stickerDataRouter from "./stickerDataRouter";

const router = Router();

router.get("/", (req, res) => {
    res.send("Online");
});

router.use(authRouter);
router.use(stickerRouter);
router.use(stickerDataRouter);

export default router;
