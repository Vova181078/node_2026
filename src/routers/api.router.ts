import { Router } from "express";

import { userController } from "../controllers/user.controller.js";

const router = Router();

router.get("/users/", userController.getAll);

router.get("/users/:id", userController.getById);

router.post("/users/:id", userController.update);

router.put("/users/:id", userController.update);

router.patch("/users/:id", userController.update);

router.delete("/users/:id", userController.delete);

export const apiRouter = router;
