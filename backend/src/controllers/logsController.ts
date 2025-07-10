import { Request, Response, NextFunction } from "express";
import prisma from "../lib/prisma";
import logger from "../lib/logger";
import { logSchema } from "../validators/logSchemas";
import { AppError } from "../lib/errors";
import { z } from "zod";

export const getLogs = async (req: Request, res: Response) => {
  const userId = (req as any).userId;

  try {
    const logs = await prisma.log.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    logger.info(`[LOGS] Fetched ${logs.length} logs for user ${userId}`);
    res.json(logs);
  } catch (error) {
    logger.error(`[LOGS] Error fetching logs: ${error}`);
    res.status(500).json({ error: "Failed to fetch logs" });
  }
};

export const createLog = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = (req as any).userId;

  try {
    const { mood, feelings, journal, sleepHours } = logSchema.parse(req.body);

    const newLog = await prisma.log.create({
      data: { mood, feelings, journal, sleepHours, userId },
    });

    logger.info(`[LOGS] Created new log for user ${userId}`);
    res.status(201).json(newLog);
  } catch (err) {
    if (err instanceof z.ZodError) {
      const msg = err.issues.map((e) => e.message).join(", ");
      next(new AppError(msg, 400));
    } else {
      next(err);
    }
  }
};
