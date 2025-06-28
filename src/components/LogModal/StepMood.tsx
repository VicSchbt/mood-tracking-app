import { getMood, MoodValue } from '@/app/lib/moods';

interface StepMoodProps {
  mood: MoodValue | null;
  onSelect: (mood: MoodValue) => void;
  onNext: () => void;
}

const StepMood = ({ mood, onSelect, onNext }: StepMoodProps) => {
  const moodValues: MoodValue[] = [-2, -1, 0, 1, 2];

  return (
    <div className="space-y-200">
      <p className="font-semibold text-neutral-800">How was your mood today?</p>
      <div className="space-y-100">
        {moodValues.map((value) => {
          const data = getMood(value);
          return (
            <label
              key={value}
              className={`flex items-center justify-between rounded-xl border px-200 py-150 ${
                mood === value ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
              }`}
            >
              <input
                type="radio"
                name="mood"
                value={value}
                checked={mood === value}
                onChange={() => onSelect(value)}
              />
              <span className="ml-100 font-medium">{data.label}</span>
              <img src={data.icon.color} alt={data.label} className="h-200 w-200" />
            </label>
          );
        })}
      </div>
      <button
        className="w-full rounded-xl bg-blue-600 py-150 font-semibold text-white"
        onClick={onNext}
        disabled={mood === null}
      >
        Continue
      </button>
    </div>
  );
};

export default StepMood;
