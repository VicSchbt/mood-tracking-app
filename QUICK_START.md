# Quick Start Guide - Mood Tracking App

## 🚀 Get Started in 5 Minutes

### Prerequisites

- Node.js 18+
- npm or yarn
- Git

### 1. Clone and Install

```bash
git clone <repository-url>
cd mood-tracking-app
npm install
```

### 2. Start Development Servers

```bash
# Terminal 1: Start Next.js dev server
npm run dev

# Terminal 2: Start mock API server
npm run server
```

### 3. Access the Application

- **Frontend**: http://localhost:3000
- **API**: http://localhost:3001/moodEntries

## 📁 Key Files to Know

### Core Application

- `src/app/page.tsx` - Main dashboard page
- `src/app/layout.tsx` - Root layout component
- `src/types/index.ts` - TypeScript type definitions

### Data & API

- `src/app/lib/api.ts` - API functions
- `src/app/lib/utils.ts` - Calculation utilities
- `src/data/data.json` - Mock data and quotes

### Components

- `src/components/TrendChart/` - Chart visualization
- `src/components/AverageCard/` - Average calculation cards
- `src/components/Header.tsx` - Navigation header

## 🔧 Available Scripts

```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run server       # Start JSON Server (mock API)
npm run format       # Format code with Prettier
```

## 📊 Data Structure

### Mood Entry

```typescript
{
  createdAt: "2025-03-20T09:00:00Z",
  mood: 2,                    // -2 to +2 scale
  feelings: ["Joyful", "Motivated"],
  journalEntry: "Had an amazing morning run!",
  sleepHours: 7.5
}
```

### Mood Scale

- `-2`: Very Sad (Red)
- `-1`: Sad (Indigo)
- `0`: Neutral (Blue)
- `1`: Happy (Green)
- `2`: Very Happy (Amber)

### Sleep Categories

- `1`: 0-2 hours
- `3.5`: 2-4 hours
- `5.5`: 5-6 hours
- `7.5`: 7-8 hours
- `9`: 9+ hours

## 🛠️ Key Functions

### Calculate Averages

```typescript
import { getAverageMoodLast5Days, getAverageSleepLast5Days } from './lib/utils';

const avgMood = getAverageMoodLast5Days(logs); // Returns MoodValue | null
const avgSleep = getAverageSleepLast5Days(logs); // Returns SleepValue | null
```

### Fetch Data

```typescript
import { fetchMoods } from './lib/api';

const logs = await fetchMoods(); // Returns LogEntry[]
```

### Get Mood/Sleep Info

```typescript
import { getMood } from './lib/moods';
import { getSleep } from './lib/sleep';

const moodInfo = getMood(1); // Returns mood configuration
const sleepInfo = getSleep(7.5); // Returns "7-8 hours"
```

## 🎨 Styling

### Tailwind CSS

- Custom design tokens from Figma
- Mobile-first responsive design
- Custom font: Reddit Sans

### CSS Classes

```css
.layout-grid     /* Main layout grid */
.area-greeting   /* Greeting section */
.area-cards      /* Average cards section */
.area-chart      /* Chart section */
```

## 🔍 Development Tips

### Adding New Features

1. Define types in `src/types/index.ts`
2. Add utility functions in `src/app/lib/utils.ts`
3. Create components in `src/components/`
4. Update mock data in `src/data/data.json`

### Testing Data

- Edit `src/data/data.json` to test different scenarios
- JSON Server automatically reloads changes
- Use browser dev tools to inspect API responses

### Debugging

```typescript
// Check data loading
console.log('Fetched logs:', logs);

// Verify calculations
console.log('Average mood:', getAverageMoodLast5Days(logs));
console.log('Average sleep:', getAverageSleepLast5Days(logs));
```

## 🚨 Common Issues

### API Connection Error

```bash
# Ensure JSON Server is running
npm run server

# Check if port 3001 is available
lsof -i :3001
```

### Build Errors

```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### Styling Issues

```bash
# Restart dev server
npm run dev
```

## 📚 Next Steps

1. **Explore Components**: Check out the component structure
2. **Review Data**: Examine the mock data structure
3. **Test Calculations**: Try different data scenarios
4. **Customize Styling**: Modify Tailwind classes
5. **Add Features**: Implement new functionality

## 🔗 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Recharts Documentation](https://recharts.org/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

**Need Help?** Check the full [Documentation](./DOCUMENTATION.md) or [API Documentation](./API_DOCUMENTATION.md)
