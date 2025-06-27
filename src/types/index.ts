export type LogEntry = {
  createdAt: string;
  mood: number;
  feelings: string[];
  journalEntry: string;
  sleepHours: number;
};

export type TendencyType = 'increase' | 'decrease' | 'equal' | null;
