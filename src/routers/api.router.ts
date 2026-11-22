import { Request, Response, Router } from "express";
import { userController } from "../controllers/user.controller.js";
import { commonMiddleware } from "../middlewares/common.middleware.js";
import { updateAndCreateUserValidator } from "../validations/user.validate.js";

const router = Router();

router.get("/users", userController.getAll);

router.get(
    "/users/:userId",
    commonMiddleware.isIdValid("userId"),
    userController.getById,
);

router.post(
    "/users",
    commonMiddleware.isBodyValid(updateAndCreateUserValidator),
    userController.create,
);
router.patch(
    "/users/:userId",
    commonMiddleware.isIdValid("userId"),
    commonMiddleware.isBodyValid(updateAndCreateUserValidator),
    userController.update,
);

router.delete(
    "/users/:userId",
    commonMiddleware.isIdValid("userId"),
    userController.delete,
);

export const apiRouter = router;
