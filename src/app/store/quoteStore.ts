import { create } from 'zustand';
import { MoodValue } from '../lib/moods';
import { fetchQuotes } from '../lib/api';

interface QuoteStore {
  quotes: Record<MoodValue, string[]>;
  fetchQuotes: () => Promise<void>;
  getRandomQuoteForMood: (mood: MoodValue) => string | null;
}

export const useQuoteStore = create<QuoteStore>((set, get) => ({
  quotes: {
    [-2]: [],
    [-1]: [],
    0: [],
    1: [],
    2: [],
  },
  fetchQuotes: async () => {
    const quotes = await fetchQuotes();
    set({ quotes: quotes });
  },
  getRandomQuoteForMood: (mood: MoodValue) => {
    const quotes = get().quotes[mood];
    if (!quotes || quotes.length === 0) return null;
    const i = Math.floor(Math.random() * quotes.length);
    return quotes[i];
  },
}));
