import { Router } from "express";
import { getUser, updateUser } from "../controllers/userController";
import { authenticate } from "../middleware/auth";

const router = Router();

router.get("/", authenticate, getUser);
router.patch("/", authenticate, updateUser);

export default router;
