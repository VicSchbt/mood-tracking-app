// src/lib/moods.ts
export type MoodValue = -2 | -1 | 0 | 1 | 2

type MoodConfig = {
  value: MoodValue
  label: string
  color: string
  icon: {
    white: string
    color: string
    }   
}

export const moodMap: Record<MoodValue, MoodConfig> = {
  [-2]: {
    value: -2,
    label: 'Very Sad',
    color: 'bg-red-300',
    icon: {
        white: '/images/icon-very-sad-white.svg',
        color: '/images/icon-very-sad-color.svg',
    },  
  },
  [-1]: {
    value: -1,
    label: 'Sad',
    color: 'bg-red-300',
    icon: {
        white: '/images/icon-sad-white.svg',
        color: '/images/icon-sad-color.svg',
    },
  },
  [0]: {
    value: 0,
    label: 'Neutral',
    color: 'bg-amber-300',
    icon: {
        white: '/images/icon-neutral-white.svg',
        color: '/images/icon-neutral-color.svg',
    },
  },
  [1]: {
    value: 1,
    label: 'Happy',
    color: 'bg-green-300',
    icon: {
        white: '/images/icon-happy-white.svg',
        color: '/images/icon-happy-color.svg',
    },
  },
  [2]: {
    value: 2,
    label: 'Very Happy',
    color: 'bg-green-300',
    icon: {
        white: '/images/icon-very-happy-white.svg',
        color: '/images/icon-very-happy-color.svg',
    },
  },
}

// Optional helper
export function getMood(value: MoodValue) {
  return moodMap[value]
}
