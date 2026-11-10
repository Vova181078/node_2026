import { NextFunction, Request, Response } from "express";
import {userRepository} from "../repositories/user.repositories.js";
import { ApiError } from "../errors/api.errors.js";


export const userController = {
    async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const allUsers = await userRepository.getAll();
            res.status(200).json(allUsers);
        } catch (err) {
            next(err);
        }
    },

    async getById(req: Request, res: Response, next: NextFunction) {
        try {
            const userId = req.params.userId;
            const user = await userRepository.getById(+userId);
            res.status(200).json(user);
        } catch (err: any) {
            if (err instanceof ApiError) {
                if (err.message === "User Not Found") {
                    return next(new ApiError(err.message, 404));
                }
            }
            next(err);
        }
    },

    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const newUser = await userRepository.create(req.body);
            res.status(201).json(newUser);
        } catch (err) {
            if (err instanceof ApiError) {
                if (err.message.includes("must be")) {
                    return next(new ApiError(err.message, 400));
                }
            }
            next(err);
        }
    },

    async update(req: Request, res: Response, next: NextFunction) {
        try {
            const userId = req.params.userId;
            const updatedUser = await userRepository.update(+userId, req.body);
            res.status(200).json(updatedUser);
        } catch (err) {
            if (err instanceof ApiError) {
                if (err.message === "User Not Found") {
                    return next(new ApiError(err.message, 404));
                }
                if (err.message.includes("must be")) {
                    return next(new ApiError(err.message, 400));
                }
            }
            next(err);
        }
    },

    async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const userId = req.params.userId;
            await userRepository.delete(+userId);
            res.status(204).send(); // 204 No Content
        } catch (err) {
            if (err instanceof ApiError) {
                if (err.message === "User Not Found") {
                    return next(new ApiError(err.message, 404));
                }
            }
            next(err);
        }
    },
};
