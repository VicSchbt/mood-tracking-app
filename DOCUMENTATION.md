# Mood Tracking App Documentation

## Table of Contents

1. [Overview](#overview)
2. [Architecture](#architecture)
3. [Project Structure](#project-structure)
4. [Core Types](#core-types)
5. [API Layer](#api-layer)
6. [Utility Functions](#utility-functions)
7. [Components](#components)
8. [Data Models](#data-models)
9. [Configuration](#configuration)
10. [Development Guide](#development-guide)
11. [Deployment](#deployment)

## Overview

The Mood Tracking App is a Next.js-based web application that allows users to track their daily mood, feelings, reflections, and sleep patterns. The app provides data visualization, trend analysis, and insights to help users understand their emotional well-being over time.

### Key Features

- **Daily Mood Logging**: Track mood on a 5-point scale (-2 to +2)
- **Sleep Tracking**: Monitor sleep duration with predefined categories
- **Journal Entries**: Record daily reflections and feelings
- **Trend Analysis**: Visualize mood and sleep patterns over time
- **Average Calculations**: Compare recent vs. previous 5-day periods
- **Responsive Design**: Mobile-first approach with desktop optimization
- **Mock Backend**: JSON Server for development and testing

## Architecture

The application follows a modern React/Next.js architecture with:

- **Frontend**: Next.js 15 with App Router and TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **State Management**: React hooks and local state
- **Data Fetching**: React Query for server state management
- **Backend**: JSON Server for mock API (development)
- **Validation**: Zod for schema validation

### Technology Stack

```json
{
  "framework": "Next.js 15.3.4",
  "language": "TypeScript 5",
  "styling": "Tailwind CSS 4",
  "dataFetching": "@tanstack/react-query",
  "validation": "zod",
  "dateHandling": "date-fns",
  "charts": "recharts",
  "development": "json-server"
}
```

## Project Structure

```
mood-tracking-app/
├── public/                    # Static assets
│   └── images/               # Icons and images
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── lib/             # Utility libraries
│   │   │   ├── api.ts       # API functions
│   │   │   ├── moods.ts     # Mood configuration
│   │   │   ├── sleep.ts     # Sleep configuration
│   │   │   └── utils.ts     # Helper functions
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   │   └── settings/        # Settings page
│   ├── components/          # React components
│   │   ├── AverageCard/     # Average calculation cards
│   │   ├── TrendChart/      # Chart components
│   │   ├── Container.tsx    # Layout wrapper
│   │   ├── Greeting.tsx     # User greeting
│   │   ├── Header.tsx       # App header
│   │   └── LogMoodButton.tsx # Mood logging button
│   ├── data/               # Mock data
│   │   └── data.json       # Sample mood entries and quotes
│   └── types/              # TypeScript type definitions
│       └── index.ts        # Core types
├── package.json            # Dependencies and scripts
├── tailwind.config.ts      # Tailwind configuration
└── next.config.ts          # Next.js configuration
```

## Core Types

### LogEntry

The primary data structure for mood tracking entries:

```typescript
export type LogEntry = {
  createdAt: string; // ISO date string
  mood: number; // Mood value (-2 to +2)
  feelings: string[]; // Array of feeling tags
  journalEntry: string; // Text reflection
  sleepHours: number; // Sleep duration
};
```

### TendencyType

Used for trend analysis:

```typescript
export type TendencyType = 'increase' | 'decrease' | 'equal' | null;
```

### MoodValue

Mood scale definition:

```typescript
export type MoodValue = -2 | -1 | 0 | 1 | 2;
```

### SleepValue

Sleep duration categories:

```typescript
export type SleepValue = 1 | 3.5 | 5.5 | 7.5 | 9;
```

## API Layer

### fetchMoods()

Fetches mood entries from the mock API server.

```typescript
export async function fetchMoods(): Promise<LogEntry[]>;
```

**Usage:**

```typescript
const logs = await fetchMoods();
```

**Error Handling:**

- Throws `Error` if fetch fails
- Returns empty array if no data

**Configuration:**

- Endpoint: `http://localhost:3001/moodEntries`
- Port: 3001 (JSON Server default)

## Utility Functions

### Mood Calculations

#### getAverageMoodLast5Days()

Calculates the average mood of the last 5 entries.

```typescript
export function getAverageMoodLast5Days(moods: LogEntry[]): MoodValue | null;
```

**Parameters:**

- `moods`: Array of LogEntry objects

**Returns:**

- `MoodValue`: Rounded average mood (-2 to +2)
- `null`: If fewer than 5 entries

**Example:**

```typescript
const averageMood = getAverageMoodLast5Days(logs);
// Returns: 1 (Happy) or null
```

### Sleep Calculations

#### getAverageSleepLast5Days()

Calculates the average sleep hours of the last 5 entries.

```typescript
export function getAverageSleepLast5Days(logs: LogEntry[]): SleepValue | null;
```

**Parameters:**

- `logs`: Array of LogEntry objects

**Returns:**

- `SleepValue`: Categorized sleep duration
- `null`: If fewer than 5 entries

**Sleep Categories:**

- `1`: 0-2 hours
- `3.5`: 2-4 hours
- `5.5`: 5-6 hours
- `7.5`: 7-8 hours
- `9`: 9+ hours

### Trend Analysis

#### compareLast5WithPrevious5Mood()

Compares mood trends between recent and previous 5-day periods.

```typescript
export function compareLast5WithPrevious5Mood(entries: LogEntry[]): TendencyType;
```

#### compareLast5WithPrevious5Sleep()

Compares sleep trends between recent and previous 5-day periods.

```typescript
export function compareLast5WithPrevious5Sleep(entries: LogEntry[]): TendencyType;
```

**Returns:**

- `'increase'`: Recent average is higher
- `'decrease'`: Recent average is lower
- `'equal'`: Averages are the same
- `null`: Insufficient data (< 10 entries)

### Helper Functions

#### isValueEmpty()

Checks if a numeric value is null or undefined.

```typescript
export function isValueEmpty(value: number | null | undefined): boolean;
```

## Components

### Core Components

#### Header

- **File**: `src/components/Header.tsx`
- **Purpose**: Application header with navigation
- **Features**: Settings link, responsive design

#### Greeting

- **File**: `src/components/Greeting.tsx`
- **Purpose**: Personalized user greeting
- **Props**: `className` for styling

#### Container

- **File**: `src/components/Container.tsx`
- **Purpose**: Layout wrapper component
- **Props**: `as` (HTML element), `className`

#### LogMoodButton

- **File**: `src/components/LogMoodButton.tsx`
- **Purpose**: Primary action button for mood logging
- **Features**: Hover states, accessibility

### Average Cards

#### MoodAverageCard

- **File**: `src/components/AverageCard/MoodAverageCard.tsx`
- **Purpose**: Displays average mood with trend comparison
- **Props**: `value`, `logs`

#### SleepAverageCard

- **File**: `src/components/AverageCard/SleepAverageCard.tsx`
- **Purpose**: Displays average sleep with trend comparison
- **Props**: `value`, `logs`

### Chart Components

#### TrendChart

- **File**: `src/components/TrendChart/TrendChart.tsx`
- **Purpose**: Interactive mood and sleep trend visualization
- **Features**:
  - Bar chart with 11 most recent entries
  - Interactive tooltips
  - Responsive design
  - Custom axis formatting

#### Custom Axis Components

- **CustomeXAxisTick.tsx**: Custom X-axis date formatting
- **CustomeYAxisTick.tsx**: Custom Y-axis value formatting

## Data Models

### Mood Configuration

Defined in `src/app/lib/moods.ts`:

```typescript
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
```

**Mood Scale:**

- `-2`: Very Sad (Red)
- `-1`: Sad (Indigo)
- `0`: Neutral (Blue)
- `1`: Happy (Green)
- `2`: Very Happy (Amber)

### Sleep Configuration

Defined in `src/app/lib/sleep.ts`:

```typescript
export const sleepMap: Record<SleepValue, string> = {
  1: '0-2 hours',
  3.5: '2-4 hours',
  5.5: '5-6 hours',
  7.5: '7-8 hours',
  9: '9+ hours',
};
```

### Data Structure

Sample data structure from `src/data/data.json`:

```json
{
  "moodEntries": [
    {
      "createdAt": "2025-03-20T09:00:00Z",
      "mood": 2,
      "feelings": ["Joyful", "Motivated", "Hopeful"],
      "journalEntry": "Had an amazing morning run and feel full of energy!",
      "sleepHours": 7.5
    }
  ],
  "moodQuotes": {
    "-2": ["You are stronger than you think; the storm will pass."],
    "-1": ["Pain is temporary, brighter days lie ahead."],
    "0": ["A calm mind can find opportunity in every moment."],
    "1": ["Happiness grows when it's shared with others."],
    "2": ["When your heart is full, share your light with the world."]
  }
}
```

## Configuration

### Tailwind CSS

Custom design tokens and configuration:

```typescript
// tailwind.config.ts
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Reddit Sans', 'sans-serif'],
      },
      spacing: {
        // Custom spacing tokens
      },
      colors: {
        // Custom color palette
      },
    },
  },
  plugins: [],
};
```

### Next.js Configuration

```typescript
// next.config.ts
const nextConfig = {
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
};
```

## Development Guide

### Prerequisites

- Node.js 18+
- npm or yarn
- Git

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd mood-tracking-app

# Install dependencies
npm install

# Start development server
npm run dev

# Start mock API server (in separate terminal)
npm run server
```

### Available Scripts

```json
{
  "dev": "next dev --turbopack",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "server": "json-server --watch src/data/data.json --port 3001",
  "format": "prettier --write ."
}
```

### Development Workflow

1. **Start Development Server**: `npm run dev`
2. **Start Mock API**: `npm run server` (port 3001)
3. **Access Application**: `http://localhost:3000`
4. **API Endpoint**: `http://localhost:3001/moodEntries`

### Code Style

- **TypeScript**: Strict mode enabled
- **ESLint**: Next.js recommended rules
- **Prettier**: Code formatting
- **Components**: Functional components with hooks
- **Naming**: Descriptive names, no abbreviations

### Testing

Currently, the application uses manual testing with mock data. Future improvements could include:

- Unit tests for utility functions
- Component testing with React Testing Library
- Integration tests for API endpoints
- E2E tests with Playwright or Cypress

## Deployment

### Build Process

```bash
# Build for production
npm run build

# Start production server
npm start
```

### Environment Variables

Create `.env.local` for environment-specific configuration:

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3001

# Development/Production flags
NODE_ENV=development
```

### Deployment Options

1. **Vercel** (Recommended for Next.js)
2. **Netlify**
3. **AWS Amplify**
4. **Docker** containerization

### Production Considerations

- Replace JSON Server with real backend
- Implement user authentication
- Add database persistence
- Configure environment variables
- Set up monitoring and analytics
- Implement error tracking
- Add performance optimization

## Contributing

### Development Guidelines

1. **Code Quality**: Follow TypeScript best practices
2. **Component Design**: Single responsibility principle
3. **State Management**: Use React hooks appropriately
4. **Styling**: Follow Tailwind CSS conventions
5. **Documentation**: Update docs for new features

### Pull Request Process

1. Create feature branch
2. Implement changes with tests
3. Update documentation
4. Submit pull request
5. Code review and approval
6. Merge to main branch

## Troubleshooting

### Common Issues

1. **API Connection Errors**
   - Ensure JSON Server is running on port 3001
   - Check CORS configuration
   - Verify data.json file exists

2. **Build Errors**
   - Clear `.next` directory
   - Reinstall dependencies
   - Check TypeScript errors

3. **Styling Issues**
   - Verify Tailwind CSS configuration
   - Check custom CSS imports
   - Validate responsive breakpoints

### Performance Optimization

- Use React.memo for expensive components
- Implement proper loading states
- Optimize bundle size with dynamic imports
- Add error boundaries for better UX

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

For additional support or questions, please refer to the project repository or contact the development team.
