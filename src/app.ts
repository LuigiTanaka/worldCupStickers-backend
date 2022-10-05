import express, { json } from "express";
import cors from "cors";
import "express-async-errors";
import { errorMiddleware } from "./middlewares/errorMiddleware";
import router from "./routes/index";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(json());

app.use(router);
app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

export default app;
