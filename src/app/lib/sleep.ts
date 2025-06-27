export type SleepValue = 1 | 3.5 | 5.5 | 7.5 | 9.5;

export const sleepMap: Record<SleepValue, string> = {
  1: '0-2 hours',
  3.5: '2-4 hours',
  5.5: '5-6 hours',
  7.5: '7-8 hours',
  9.5: '9+ hours',
};

/**
 * Converts a sleep value to a human-readable label
 * @param value - The sleep value (1, 3.5, 5.5, 7.5, or 9.5)
 * @returns The corresponding sleep duration label
 */

export function getSleep(value: SleepValue) {
  return sleepMap[value];
}
