/**
 * Mood tracking utilities and configuration
 *
 * This module provides utilities for managing mood tracking in the mood tracking app.
 * It defines mood value types, configurations, and helper functions for converting between
 * different representations of mood states.
 *
 * The module centralizes mood logic to ensure:
 * - Consistent mood categorization across the application
 * - Type-safe mood value handling
 * - Easy conversion between numeric values and human-readable labels
 * - Standardized mood colors and icons for UI consistency
 * - Comprehensive mood configuration including visual elements
 *
 * @module moods
 */

/**
 * Valid mood values representing different emotional states
 *
 * These values represent the predefined mood categories used throughout the app.
 * Each value corresponds to a specific emotional state with associated visual elements.
 *
 * The values follow a scale from negative to positive emotions:
 * - -2: Very Sad (extreme negative emotion)
 * - -1: Sad (negative emotion)
 * - 0: Neutral (balanced emotion)
 * - 1: Happy (positive emotion)
 * - 2: Very Happy (extreme positive emotion)
 *
 * @example
 * ```typescript
 * const moodValue: MoodValue = 1; // Represents a happy mood
 * ```
 */
export type MoodValue = -2 | -1 | 0 | 1 | 2;

/**
 * Configuration object for a mood state
 *
 * This type defines the complete configuration for each mood value,
 * including display properties, colors, and associated icons.
 * Used internally by the moodMap to provide consistent mood representation.
 *
 * @property value - The numeric mood value
 * @property label - Human-readable mood label
 * @property color - Tailwind CSS class for background color
 * @property colorHex - Hexadecimal color value
 * @property icon - Object containing paths to white and colored icon variants
 */
type MoodConfig = {
  value: MoodValue;
  label: string;
  color: string;
  colorHex: string;
  icon: {
    white: string;
    color: string;
  };
};

/**
 * Complete mapping of mood values to their configurations
 *
 * This constant provides a comprehensive lookup table for all mood states,
 * including their display properties, colors, and icon assets. Used throughout
 * the UI for consistent mood representation and styling.
 *
 * Each mood configuration includes:
 * - Visual styling (colors and Tailwind classes)
 * - Display labels for user interfaces
 * - Icon assets for both white and colored variants
 *
 * @example
 * ```typescript
 * import { moodMap } from './moods';
 *
 * const happyMood = moodMap[1];
 * console.log(happyMood.label); // Output: "Happy"
 * console.log(happyMood.color); // Output: "bg-green-300"
 * console.log(happyMood.icon.color); // Output: "/images/icon-happy-color.svg"
 * ```
 */
export const moodMap: Record<MoodValue, MoodConfig> = {
  [-2]: {
    value: -2,
    label: 'Very Sad',
    color: 'bg-red-300',
    colorHex: '#FFB9B9',
    icon: {
      white: '/images/icon-very-sad-white.svg',
      color: '/images/icon-very-sad-color.svg',
    },
  },
  [-1]: {
    value: -1,
    label: 'Sad',
    color: 'bg-indigo-200',
    colorHex: '#B8B1FF',
    icon: {
      white: '/images/icon-sad-white.svg',
      color: '/images/icon-sad-color.svg',
    },
  },
  [0]: {
    value: 0,
    label: 'Neutral',
    color: 'bg-blue-300',
    colorHex: '#89CAFF',
    icon: {
      white: '/images/icon-neutral-white.svg',
      color: '/images/icon-neutral-color.svg',
    },
  },
  [1]: {
    value: 1,
    label: 'Happy',
    color: 'bg-green-300',
    colorHex: '#89E780',
    icon: {
      white: '/images/icon-happy-white.svg',
      color: '/images/icon-happy-color.svg',
    },
  },
  [2]: {
    value: 2,
    label: 'Very Happy',
    color: 'bg-amber-300',
    colorHex: '#FFC97C',
    icon: {
      white: '/images/icon-very-happy-white.svg',
      color: '/images/icon-very-happy-color.svg',
    },
  },
};

/**
 * Converts a mood value to its complete configuration object
 *
 * This utility function provides a convenient way to get the full configuration
 * for any valid mood value. It's the preferred method for accessing mood
 * properties including labels, colors, and icon paths.
 *
 * @param value - The mood value (-2, -1, 0, 1, or 2)
 * @returns The complete mood configuration object containing label, colors, and icons
 *
 * @example
 * ```typescript
 * import { getMood } from './moods';
 *
 * const moodConfig = getMood(1);
 * console.log(moodConfig.label); // Output: "Happy"
 * console.log(moodConfig.color); // Output: "bg-green-300"
 *
 * // Use in React components
 * const mood = getMood(selectedMoodValue);
 * return (
 *   <div className={mood.color}>
 *     <img src={mood.icon.color} alt={mood.label} />
 *     <span>{mood.label}</span>
 *   </div>
 * );
 * ```
 *
 * @throws {TypeError} If the value is not a valid MoodValue
 */
export function getMood(value: MoodValue): MoodConfig {
  return moodMap[value];
}
