import { Router } from "express";
import { getQuote } from "../controllers/quotesController";

const router = Router();

router.get("/", getQuote);

export default router;
