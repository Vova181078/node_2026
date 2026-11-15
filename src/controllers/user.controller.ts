import { NextFunction, Request, Response } from "express";

import { userService } from "../services/user.service.js";

export const userController = {
    async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const allUsers = await userService.getAll();
            res.status(200).json(allUsers);
        } catch (err: unknown) {
            next(err);
        }
    },

    async getById(req: Request, res: Response, next: NextFunction) {
        try {
            const userId = Number(req.params.userId);
            const user = await userService.getById(userId);
            res.status(200).json(user);
        } catch (err: unknown) {
            next(err);
        }
    },

    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const newUser = await userService.create(req.body);
            res.status(201).json(newUser);
        } catch (err: unknown) {
            next(err);
        }
    },

    async update(req: Request, res: Response, next: NextFunction) {
        try {
            const userId = Number(req.params.userId);
            const updatedUser = await userService.update(userId, req.body);
            res.status(200).json(updatedUser);
        } catch (err: unknown) {
            next(err);
        }
    },

    async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const userId = Number(req.params.userId);
            await userService.delete(userId);
            res.status(204).send();
        } catch (err: unknown) {
            next(err);
        }
    },
};
