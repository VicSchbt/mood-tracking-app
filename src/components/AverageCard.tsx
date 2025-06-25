// src/components/AverageCard.tsx
type Props = {
    type: 'mood' | 'sleep'
  }
  
  export default function AverageCard({ type }: Props) {
    const titles = {
      mood: 'Average Mood (Last 5 Check-ins)',
      sleep: 'Average Sleep (Last 5 Check-ins)',
    }
  
    const messages = {
      mood: {
        title: 'Keep tracking!',
        subtitle: 'Log 5 check-ins to see your average mood.',
      },
      sleep: {
        title: 'Not enough data yet!',
        subtitle: 'Track 5 nights to view average sleep.',
      },
    }
  
    return (
      <div className="flex-1 bg-white rounded-16 p-200 shadow-sm">
        <p className="text-text-preset-8 text-neutral-600 mb-100">{titles[type]}</p>
        <div className="bg-blue-100 rounded-12 p-150">
          <p className="text-text-preset-6 font-semibold mb-050">{messages[type].title}</p>
          <p className="text-text-preset-8 text-neutral-600">{messages[type].subtitle}</p>
        </div>
      </div>
    )
  }
  