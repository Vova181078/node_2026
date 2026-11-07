import express (req: Request, resp: Response, next: NextFunction) from "express";

import { ApiError } from "../../errors/api.errors.js";
import { apiRouter } from "../../routers/api.router.js";
import { NextFunction } from "express"; // Імпортуємо ваш готовий роутер

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(apiRouter);

process.on("uncaughtException", (err) => {
    console.error("uncaughtException", err);
    process.exit(1);
});

app.use((err: ApiError, req: Request, res: Response, next: NextFunction) => {
    const status = err.status || 500;
    const message = err.message ?? "Something went wrong";
    res.status(status).json({ status, message });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
