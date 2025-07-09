import { Request, Response, NextFunction } from "express";
import logger from "../lib/logger";

export const requestLogger = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.info(
    `[REQ] ${req.method} ${req.path} | Body: ${JSON.stringify(req.body)}`
  );
  next();
};
