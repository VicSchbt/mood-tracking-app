// src/components/AverageCard.tsx
type Props = {
    type: 'mood' | 'sleep'
  }
  
  export default function AverageCard({ type }: Props) {
    const titles = {
      mood: 'Average Mood',
      sleep: 'Average Sleep',
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
      <div className="flex flex-col gap-150">
        <p className="preset-5 text-neutral-900">{titles[type]} 
          <span className="preset-7 text-neutral-600"> (Last 5 Check-ins)</span>
        </p>
        <div className="bg-blue-100 rounded-16 px-200 py-300 flex flex-col gap-150 relative overflow-hidden">
          {/* Decorative background image */}
          <img
            src="/images/bg-pattern-averages.svg"
            alt=""
            aria-hidden="true"
            className="absolute right-0 top-1/2 -translate-y-1/2 size-[200%] translate-x-5/8 pointer-events-none select-none"
            style={{ zIndex: 0 }}
          />
          <div className="relative z-10">
            <p className="preset-4 font-semibold text-neutral-900">{messages[type].title}</p>
            <p className="preset-7 text-neutral-900">{messages[type].subtitle}</p>
          </div>
        </div>
      </div>
    )
  }
  