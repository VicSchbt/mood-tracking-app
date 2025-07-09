import { Router } from "express";
import { getLogs, createLog } from "../controllers/logsController";
import { authenticate } from "../middleware/auth";

const router = Router();

router.get("/", authenticate, getLogs);
router.post("/", authenticate, createLog);

export default router;
