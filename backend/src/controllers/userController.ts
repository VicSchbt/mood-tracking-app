import { Request, Response } from "express";
import prisma from "../lib/prisma";
import logger from "../lib/logger";

export const getUser = async (req: Request, res: Response) => {
  const userId = (req as any).userId;

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        avatarUrl: true,
      },
    });

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    logger.info(`[USER] Retrieved settings for ${userId}`);
    res.json(user);
  } catch (error) {
    logger.error(`[USER] Error fetching user: ${error}`);
    res.status(500).json({ message: "Could not fetch user settings" });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const userId = (req as any).userId;
  const { name, avatarUrl } = req.body;

  try {
    const updated = await prisma.user.update({
      where: { id: userId },
      data: {
        ...(name && { name }),
        ...(avatarUrl && { avatarUrl }),
      },
      select: {
        id: true,
        name: true,
        email: true,
        avatarUrl: true,
      },
    });

    logger.info(`[USER] Updated settings for ${userId}`);
    res.json(updated);
  } catch (error) {
    logger.error(`[USER] Error updating user: ${error}`);
    res.status(500).json({ message: "Could not update user settings" });
  }
};
