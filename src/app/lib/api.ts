import { MoodEntry } from "@/types"

export async function fetchMoods(): Promise<MoodEntry[]> {
    const res = await fetch('http://localhost:3001/moodEntries')
  
    if (!res.ok) {
      throw new Error('Failed to fetch moods')
    }
  
    return res.json()
  }