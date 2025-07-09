import { Request, Response } from "express";
import prisma from "../lib/prisma";
import logger from "../lib/logger";

export const getQuote = async (req: Request, res: Response) => {
  const { mood } = req.query;

  if (!mood || isNaN(Number(mood))) {
    res.status(400).json({ message: "Mood is required as a query parameter" });
    return;
  }

  const moodInt = parseInt(mood as string);
  const quotes = await prisma.moodQuote.findMany({ where: { mood: moodInt } });

  if (quotes.length === 0) {
    res.status(404).json({ message: "No quotes found for this mood" });
    return;
  }

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  logger.info(`[QUOTE] Retrieved quote for mood ${moodInt}`);
  res.json({ quote: randomQuote.text });
};
