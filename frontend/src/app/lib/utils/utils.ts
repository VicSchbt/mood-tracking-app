import { LogEntry, TendencyType } from '../../../types';
import { MoodValue } from '../moods';
import { SleepValue } from '../sleep';

/**
 * Calculates the average mood of the last 5 mood entries (by createdAt descending).
 * @param moods Array of MoodEntry objects
 * @returns Average mood (number) or null if fewer than 5 entries
 */
export function getAverageMoodLast5Days(moods: LogEntry[]): MoodValue | null {
  if (!Array.isArray(moods) || moods.length < 5) return null;
  // Sort by createdAt descending (most recent first)
  const sorted = [...moods].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
  const last5 = sorted.slice(0, 5);
  const sum = last5.reduce((acc, entry) => acc + entry.mood, 0);
  const avg = Math.round(sum / 5) as MoodValue;
  return avg;
}

function roundToSleepValue(value: number): SleepValue {
  if (value < 2) return 1;
  if (value < 4) return 3.5;
  if (value < 6) return 5.5;
  if (value < 8) return 7.5;
  return 9;
}

/**
 * Calculates the average sleep hours of the last 5 check-ins (by createdAt descending).
 * @param logs Array of LogEntry objects
 * @returns Average sleep hours (number) or null if fewer than 5 entries
 */
export function getAverageSleepLast5Days(logs: LogEntry[]): SleepValue | null {
  if (!Array.isArray(logs) || logs.length < 5) return null;
  // Sort by createdAt descending (most recent first)
  const sorted = [...logs].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
  const last5 = sorted.slice(0, 5);
  const sum = last5.reduce((acc, entry) => acc + entry.sleepHours, 0);
  const avg = Math.round(sum / 5);
  return roundToSleepValue(avg);
}

/**
 * Compares the average mood of the last 5 check-ins with the previous 5.
 * @param entries Array of MoodEntry objects
 * @returns 'increase', 'decrease', or 'equal' for mood comparison
 */
export function compareLast5WithPrevious5Mood(entries: LogEntry[]): TendencyType {
  if (!Array.isArray(entries) || entries.length < 10) return null;
  // Sort by createdAt descending (most recent first)
  const sorted = [...entries].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
  const last5 = sorted.slice(0, 5);
  const prev5 = sorted.slice(5, 10);

  const avgMood = (arr: LogEntry[]) => arr.reduce((acc, entry) => acc + entry.mood, 0) / arr.length;
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
export function compareLast5WithPrevious5Sleep(entries: LogEntry[]): TendencyType {
  if (!Array.isArray(entries) || entries.length < 10) return null;
  // Sort by createdAt descending (most recent first)
  const sorted = [...entries].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
  const last5 = sorted.slice(0, 5);
  const prev5 = sorted.slice(5, 10);

  const avgSleep = (arr: LogEntry[]) =>
    arr.reduce((acc, entry) => acc + entry.sleepHours, 0) / arr.length;
  const last5Sleep = avgSleep(last5);
  const prev5Sleep = avgSleep(prev5);

  if (last5Sleep > prev5Sleep) return 'increase';
  if (last5Sleep < prev5Sleep) return 'decrease';
  return 'equal';
}

/**
 * Checks if a value is empty (null or undefined).
 * @param value The numeric value to check
 * @returns true if the value is null or undefined, false otherwise
 */
export function isValueEmpty(value: number | null | undefined) {
  return value === null || value === undefined;
}
