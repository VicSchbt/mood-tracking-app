import { LogEntry } from '@/types';
import { MoodValue } from './moods';
import { SleepValue } from './sleep';
import { set } from 'zod';

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

export async function fetchQuotes() {
  const res = await fetch(`${BASE_URL}/moodQuotes`);

  if (!res.ok) {
    throw new Error('Failed to fetch quotes');
  }

  return res.json();
}

export async function login(email: string, password: string) {
  const res = await fetch(`http://localhost:3001/users?email=${email}`);
  const users = await res.json();
  const foundUser = users[0];

  if (foundUser && foundUser.password === password) {
    return foundUser;
  }

  return null;
}

export async function signup(email: string, password: string, name: string) {
  const res = await fetch(`${BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password, name: name.trim() }),
  });

  if (!res.ok) {
    throw new Error('Failed to signup');
  }

  return res.json();
}
