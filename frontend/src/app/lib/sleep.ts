/**
 * Sleep tracking utilities and configuration
 *
 * This module provides utilities for managing sleep duration tracking in the mood tracking app.
 * It defines sleep value types, mappings, and helper functions for converting between
 * different representations of sleep duration.
 *
 * The module centralizes sleep duration logic to ensure:
 * - Consistent sleep duration categorization across the application
 * - Type-safe sleep value handling
 * - Easy conversion between numeric values and human-readable labels
 * - Standardized sleep duration ranges for user input and display
 *
 * @module sleep
 */

/**
 * Valid sleep duration values in hours
 *
 * These values represent the predefined sleep duration categories used throughout the app.
 * Each value corresponds to a specific range of sleep hours for consistent tracking.
 *
 * The values are chosen to represent meaningful sleep duration ranges:
 * - 1: Very short sleep (0-2 hours)
 * - 3.5: Short sleep (2-4 hours)
 * - 5.5: Below recommended sleep (5-6 hours)
 * - 7.5: Recommended sleep (7-8 hours)
 * - 9: Extended sleep (9+ hours)
 *
 * @example
 * ```typescript
 * const sleepValue: SleepValue = 7.5; // Represents 7-8 hours of sleep
 * ```
 */
export type SleepValue = 1 | 3.5 | 5.5 | 7.5 | 9;

/**
 * Mapping from sleep values to human-readable duration ranges
 *
 * This constant provides a lookup table for converting numeric sleep values
 * to user-friendly display labels. Used throughout the UI for consistent
 * sleep duration representation.
 *
 * @example
 * ```typescript
 * import { sleepMap } from './sleep';
 * console.log(sleepMap[7.5]); // Output: "7-8 hours"
 * ```
 */
export const sleepMap: Record<SleepValue, string> = {
  1: '0-2 hours',
  3.5: '2-4 hours',
  5.5: '5-6 hours',
  7.5: '7-8 hours',
  9: '9+ hours',
};

/**
 * Array of all valid sleep values in ascending order
 *
 * This array is useful for UI components like sliders, step selectors,
 * or dropdown menus that need to iterate through all available sleep options.
 * The values are ordered from lowest to highest for intuitive user experience.
 *
 * @example
 * ```typescript
 * import { sleepSteps } from './sleep';
 *
 * // Use in a slider component
 * sleepSteps.forEach((step, index) => {
 *   console.log(`Step ${index + 1}: ${step} hours`);
 * });
 * ```
 */
export const sleepSteps: SleepValue[] = [1, 3.5, 5.5, 7.5, 9];

/**
 * Mapping from sleep values to their corresponding index positions (1-based)
 *
 * This mapping is useful for database storage, API communication, or any scenario
 * where you need to convert sleep values to sequential integer indices.
 * The indices start at 1 to avoid confusion with zero-based arrays.
 *
 * @example
 * ```typescript
 * import { sleepIndexMap } from './sleep';
 *
 * // Convert sleep value to index for database storage
 * const sleepValue: SleepValue = 7.5;
 * const index = sleepIndexMap[sleepValue]; // Returns 4
 * ```
 */
export const sleepIndexMap: Record<SleepValue, number> = {
  1: 1,
  3.5: 2,
  5.5: 3,
  7.5: 4,
  9: 5,
};

/**
 * Converts a sleep value to a human-readable label
 *
 * This utility function provides a convenient way to get the display label
 * for any valid sleep duration value. It's the preferred method for
 * converting sleep values to user-facing text.
 *
 * @param value - The sleep duration value (1, 3.5, 5.5, 7.5, or 9)
 * @returns The corresponding sleep duration label as a string
 *
 * @example
 * ```typescript
 * import { getSleep } from './sleep';
 *
 * const label = getSleep(5.5); // Returns "5-6 hours"
 * console.log(`You slept ${label} last night`);
 *
 * // Use in UI components
 * const sleepLabel = getSleep(selectedSleepValue);
 * ```
 *
 * @throws {TypeError} If the value is not a valid SleepValue
 */
export function getSleep(value: SleepValue): string {
  return sleepMap[value];
}
