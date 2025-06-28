import { create } from 'zustand';
import { LogEntry } from '@/types';
import { fetchMoods } from '../lib/api';

interface LogStore {
  logs: LogEntry[];
  fetchLogs: () => Promise<void>;
  addLog: (log: LogEntry) => void;
  setLogs: (logs: LogEntry[]) => void;
  clearLogs: () => void;
}

export const useLogStore = create<LogStore>((set) => ({
  logs: [],
  fetchLogs: async () => {
    const logs = await fetchMoods();
    set({ logs });
  },
  addLog: (log) => set((state) => ({ logs: [...state.logs, log] })),
  setLogs: (logs) => set({ logs }),
  clearLogs: () => set({ logs: [] }),
}));
