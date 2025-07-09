import { Request, Response } from "express";
import prisma from "../lib/prisma";
import logger from "../lib/logger";

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

export const createLog = async (req: Request, res: Response) => {
  const userId = (req as any).userId;
  const { mood, feelings, journal, sleepHours } = req.body;

  if (typeof mood !== "number" || typeof sleepHours !== "number") {
    res.status(400).json({ message: "Mood and sleep hours are required" });
    return;
  }

  try {
    const newLog = await prisma.log.create({
      data: {
        mood,
        feelings,
        journal,
        sleepHours,
        userId,
      },
    });

    logger.info(`[LOGS] Created new log for user ${userId}`);
    res.status(201).json(newLog);
  } catch (error) {
    logger.error(`[LOGS] Error creating log: ${error}`);
    res.status(500).json({ message: "Failed to create log" });
  }
};
