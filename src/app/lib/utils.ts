import { MoodEntry, TendencyType } from "@/types";
import { MoodValue } from "./moods";

/**
 * Calculates the average mood of the last 5 mood entries (by createdAt descending).
 * @param moods Array of MoodEntry objects
 * @returns Average mood (number) or null if fewer than 5 entries
 */
export function getAverageMoodLast5Days(moods: MoodEntry[]): MoodValue | null {
  if (!Array.isArray(moods) || moods.length < 5) return null;
  // Sort by createdAt descending (most recent first)
  const sorted = [...moods].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  const last5 = sorted.slice(0, 5);
  const sum = last5.reduce((acc, entry) => acc + entry.mood, 0);
  const avg = Math.round(sum / 5) as MoodValue;
  return avg;
} 

/**
 * Compares the average mood of the last 5 check-ins with the previous 5.
 * @param entries Array of MoodEntry objects
 * @returns 'increase', 'decrease', or 'equal' for mood comparison
 */
export function compareLast5WithPrevious5Mood(entries: MoodEntry[]): TendencyType {
  if (!Array.isArray(entries) || entries.length < 10) return null;
  // Sort by createdAt descending (most recent first)
  const sorted = [...entries].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  const last5 = sorted.slice(0, 5);
  const prev5 = sorted.slice(5, 10);

  const avgMood = (arr: MoodEntry[]) => arr.reduce((acc, entry) => acc + entry.mood, 0) / arr.length;
  const last5Mood = avgMood(last5);
  const prev5Mood = avgMood(prev5);

  if (last5Mood > prev5Mood) return 'increase';
  if (last5Mood < prev5Mood) return 'decrease';
  return 'equal';
}


/**
 * Compares the average sleep hours of the last 5 check-ins with the previous 5.
 * @param entries Array of MoodEntry objects
 * @returns 'increase', 'decrease', or 'equal' for sleep comparison
 */
export function compareLast5WithPrevious5Sleep(entries: MoodEntry[]): TendencyType {
  if (!Array.isArray(entries) || entries.length < 10) return null;
  // Sort by createdAt descending (most recent first)
  const sorted = [...entries].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  const last5 = sorted.slice(0, 5);
  const prev5 = sorted.slice(5, 10);

  const avgSleep = (arr: MoodEntry[]) => arr.reduce((acc, entry) => acc + entry.sleepHours, 0) / arr.length;
  const last5Sleep = avgSleep(last5);
  const prev5Sleep = avgSleep(prev5);

  if (last5Sleep > prev5Sleep) return 'increase';
  if (last5Sleep < prev5Sleep) return 'decrease';
  return 'equal';
}

