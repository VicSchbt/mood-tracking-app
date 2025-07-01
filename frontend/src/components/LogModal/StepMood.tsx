import { getMood, MoodValue } from '../../app/lib/moods';
import Button from '../Button/Button';
import RadioButton from '../RadioButton';

interface StepMoodProps {
  mood: MoodValue | null;
  onSelect: (mood: MoodValue) => void;
  onNext: () => void;
}

const StepMood = ({ mood, onSelect, onNext }: StepMoodProps) => {
  const moodValues: MoodValue[] = [-2, -1, 0, 1, 2];

  return (
    <>
      <h3 className="preset-3 font-bold text-neutral-900">How was your mood today?</h3>
      <div className="flex w-full flex-col items-stretch gap-150">
        {moodValues.map((value) => {
          const data = getMood(value);
          return (
            <RadioButton
              key={value}
              value={value.toString()}
              checked={mood === value}
              onChange={() => onSelect(value)}
            >
              <span className="preset-5 flex-1 font-semibold text-neutral-900">{data.label}</span>
              <img src={data.icon.color} alt={data.label} className="h-500 w-500" />
            </RadioButton>
          );
        })}
      </div>
      <Button label="Continue" onClick={onNext} disabled={mood === null} />
    </>
  );
};

export default StepMood;
