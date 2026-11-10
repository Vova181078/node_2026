import express, { Request, Response, NextFunction } from "express";

import { config } from "../../configs/config.js";
import { ApiError } from "../../errors/api.errors.js";
import { apiRouter } from "../../routers/api.router.js";

import * as mongoose from "mongoose";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(apiRouter);

app.use((err: ApiError, req: Request, res: Response, next: NextFunction) => {
    const status = err.status || 500;
    const message = err.message ?? "Something went wrong";

    res.status(status).json({
        status,
        message,
    });
});

process.on("uncaughtException", (err) => {
    console.error("uncaughtException:", err);
    process.exit(1);
});

const PORT = config.PORT || 3000;
const HOST = config.HOST;

app.listen(PORT, () => {
    mongoose.connect(config.MONGO_URL);
    console.log(`Server is running at http://${HOST}:${PORT}`);
});
