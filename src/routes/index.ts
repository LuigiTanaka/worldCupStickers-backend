import { Router } from "express";

import authRouter from "./authRouter";

const router = Router();

router.get("/", (req, res) => {
    res.send("Online");
});

router.use(authRouter);

export default router;
