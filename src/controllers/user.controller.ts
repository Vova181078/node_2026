import { NextFunction, Request, Response } from "express";

import { ApiError } from "../errors/api.errors.js";
import { userRouter } from "../repositories/user.repositories.js"; // Шлях до вашого репозиторію

export const userController = {
    async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const allUsers = await userRouter.getAll();
            res.status(200).json(allUsers);
        } catch (err) {
            next(err);
        }
    },

    async getById(req: Request, res: Response, next: NextFunction) {
        try {
            const userId = Number(req.params.userId);
            const user = await userRouter.getById(userId);
            res.status(200).json(user);
        } catch (err: any) {
            // Якщо репозиторій викинув помилку, що юзера немає, загортаємо її в ApiError 404
            if (err.message === "User Not Found") {
                return next(new ApiError(err.message, 404));
            }
            next(err);
        }
    },

    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const newUser = await userRouter.create(req.body);
            res.status(201).json(newUser);
        } catch (err: any) {
            // Помилки валідації з репозиторію перетворюємо на 400 Bad Request
            if (err.message.includes("must be")) {
                return next(new ApiError(err.message, 400));
            }
            next(err);
        }
    },

    async update(req: Request, res: Response, next: NextFunction) {
        try {
            const userId = Number(req.params.userId);
            const updatedUser = await userRouter.update(userId, req.body);
            res.status(200).json(updatedUser);
        } catch (err: any) {
            if (err.message === "User Not Found") {
                return next(new ApiError(err.message, 404));
            }
            if (err.message.includes("must be")) {
                return next(new ApiError(err.message, 400));
            }
            next(err);
        }
    },

    async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const userId = Number(req.params.userId);
            await userRouter.delete(userId);
            res.status(204).send(); // 204 No Content
        } catch (err: any) {
            if (err.message === "User Not Found") {
                return next(new ApiError(err.message, 404));
            }
            next(err);
        }
    },
};
