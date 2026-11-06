import { Request, Response, Router } from "express";

import { userRouter } from "../repositories/user.repositories.js";

const router = Router();

router.get("/users", async (req: Request, res: Response) => {
    try {
        const allUsers = await userRouter.getAll();
        res.status(200).json(allUsers);
    } catch (err) {
        res.status(500).json({ error: (err as Error).message });
    }
});

router.get("/users/:userId", async (req: Request, res: Response) => {
    try {
        const userId = Number(req.params.userId);
        const user = await userRouter.getById(userId);

        res.status(200).json(user);
    } catch (err) {
        if ((err as Error).message === "User Not Found") {
            return res.status(404).json({ error: (err as Error).message });
        }
        res.status(500).json({ error: (err as Error).message });
    }
});

router.post("/users", async (req: Request, res: Response) => {
    try {
        const newUser = await userRouter.create(req.body);
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ error: (err as Error).message });
    }
});

router.put("/users/:userId", async (req: Request, res: Response) => {
    try {
        const userId = Number(req.params.userId);
        const updatedUser = await userRouter.update(userId, req.body);

        res.status(200).json(updatedUser);
    } catch (err) {
        if ((err as Error).message === "User Not Found") {
            return res.status(404).json({ error: (err as Error).message });
        }
        res.status(400).json({ error: (err as Error).message });
    }
});

router.delete("/users/:userId", async (req: Request, res: Response) => {
    try {
        const userId = Number(req.params.userId);
        await userRouter.delete(userId);

        res.status(204).send();
    } catch (err) {
        if ((err as Error).message === "User Not Found") {
            return res.status(404).json({ error: (err as Error).message });
        }
        res.status(500).json({ error: (err as Error).message });
    }
});

export const apiRouter = router;
