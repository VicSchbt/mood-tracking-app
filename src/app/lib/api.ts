import { LogEntry } from '@/types';
import { MoodValue } from './moods';
import { SleepValue } from './sleep';

export interface LogFormData {
  mood: MoodValue | null;
  feelings: string[];
  journalEntry: string;
  sleepHours: SleepValue | null;
}

const BASE_URL = 'http://localhost:3001';

export async function fetchMoods(): Promise<LogEntry[]> {
  const res = await fetch(`${BASE_URL}/moodEntries`);

  if (!res.ok) {
    throw new Error('Failed to fetch moods');
  }

  return res.json();
}

export async function submitLog(data: LogFormData) {
  const payload = {
    ...data,
    createdAt: new Date().toISOString(),
  };

  const res = await fetch(`${BASE_URL}/moodEntries`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error('Failed to submit log');
  }

  return res.json();
}
