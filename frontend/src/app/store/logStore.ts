import { create } from 'zustand';
import { LogEntry } from '../../types';
import { fetchMoods } from '../lib/api';

interface LogStore {
  logs: LogEntry[];
  fetchLogs: () => Promise<void>;
  addLog: (log: LogEntry) => void;
  setLogs: (logs: LogEntry[]) => void;
  clearLogs: () => void;
  getLastLog: () => LogEntry | null;
}

export const useLogStore = create<LogStore>((set, get) => ({
  logs: [],
  fetchLogs: async () => {
    const logs = await fetchMoods();
    set({ logs });
  },
  addLog: (log) => set((state) => ({ logs: [...state.logs, log] })),
  setLogs: (logs) => set({ logs }),
  clearLogs: () => set({ logs: [] }),
  getLastLog: () => {
    const logs = get().logs;
    return logs.length > 0 ? logs[logs.length - 1] : null;
  },
}));
