import { NextFunction, Request, Response } from "express";

import { ApiError } from "../errors/api.errors.js";
import { IUser } from "../interfaces/user.interface.js";
import { userRepository } from "../repositories/user.repositories.js";

export const userController = {
    async getAll(
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<void> {
        try {
            const allUsers = await userRepository.getAll();
            res.status(200).json(allUsers);
        } catch (err) {
            next(err);
        }
    },

    async getById(
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<void> {
        try {
            const userId = req.params.userId as string;
            const user = await userRepository.getById(userId);

            if (!user) {
                next(new ApiError("User Not Found", 404));
                return;
            }

            res.status(200).json(user);
        } catch (err) {
            next(err);
        }
    },

    async create(
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<void> {
        try {
            const dto = req.body as Partial<IUser>;

            if (!dto.name || dto.name.trim().length < 3) {
                next(new ApiError("Name must be at least 3 symbols long", 400));
                return;
            }
            if (dto.age === undefined || dto.age < 0) {
                next(new ApiError("Age must be a positive number", 400));
                return;
            }

            const newUser = await userRepository.create(dto);
            res.status(201).json(newUser);
        } catch (err) {
            next(err);
        }
    },

    async update(
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<void> {
        try {
            const userId = req.params.userId as string;
            const dto = req.body as Partial<IUser>;

            if (dto.name !== undefined && dto.name.trim().length < 3) {
                next(new ApiError("Name must be at least 3 symbols long", 400));
                return;
            }
            if (dto.age !== undefined && dto.age < 0) {
                next(new ApiError("Age must be a positive number", 400));
                return;
            }

            const updatedUser = await userRepository.updateById(userId, dto);

            if (!updatedUser) {
                next(new ApiError("User Not Found", 404));
                return;
            }

            res.status(200).json(updatedUser);
        } catch (err) {
            next(err);
        }
    },

    async delete(
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<void> {
        try {
            const userId = req.params.userId as string;
            const deletedUser = await userRepository.deleteById(userId);

            if (!deletedUser) {
                next(new ApiError("User Not Found", 404));
                return;
            }

            res.status(204).send();
        } catch (err) {
            next(err);
        }
    },
};
