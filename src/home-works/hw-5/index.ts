
    import express, { Request, Response, NextFunction } from "express";

    import { config } from "../../configs/config.js";
    import { ApiError } from "../../errors/api.errors.js";
    import { apiRouter } from "../../routers/api.router.js";

    const app = express();

// Middleware для обробки даних із запитів
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

// Підключення роутера
    app.use(apiRouter);

// Глобальний обробник помилок
    app.use(
        (err: ApiError, req: Request, res: Response, next: NextFunction) => {
            const status = err.status || 500;
            const message = err.message ?? "Something went wrong";

            res.status(status).json({
                status,
                message,
            });
        },
    );

// Обробка непередбачених помилок Node.js
    process.on("uncaughtException", (err) => {
        console.error("uncaughtException:", err);
        process.exit(1);
    });

// Запуск сервера
    const PORT = config.PORT || 3000;

    app.listen(PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}`);
    });

    console.log(`Server is running at http://localhost:${PORT}`);

