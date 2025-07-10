import { Request, Response, NextFunction } from "express";
import logger from "../lib/logger";
import { AppError } from "../lib/errors";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = err instanceof AppError ? err.statusCode : 500;
  const message =
    err instanceof AppError
      ? err.message
      : process.env.NODE_ENV === "production"
      ? "Something went wrong"
      : err.message;

  logger.error(`[ERROR] ${err.message} \n${err.stack}`);
  res.status(status).json({ error: message });
};
