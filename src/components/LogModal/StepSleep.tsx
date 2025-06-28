import { sleepMap, SleepValue } from '@/app/lib/sleep';
import FooterButtons from '../Button/FooterButtons';
import RadioButton from '../RadioButton';

interface StepSleepProps {
  sleepHours: SleepValue | null;
  onSelect: (val: SleepValue) => void;
  onSubmit: () => void;
  onBack: () => void;
}

const sleepOptions: SleepValue[] = [9, 7.5, 5.5, 3.5, 1];

const StepSleep = ({ sleepHours, onSelect, onSubmit, onBack }: StepSleepProps) => {
  return (
    <>
      <h3 className="preset-3 font-bold text-neutral-900">
        How many hours did you sleep last night?
      </h3>

      <div className="space-y-100">
        {sleepOptions.map((value) => (
          <RadioButton
            key={value}
            value={value.toString()}
            checked={sleepHours === value}
            onChange={() => onSelect(value)}
          >
            <span className="preset-5 flex-1 font-semibold text-neutral-900">
              {sleepMap[value]}
            </span>
          </RadioButton>
        ))}
      </div>

      <FooterButtons onBack={onBack} onNext={onSubmit} nextLabel="Submit" />
    </>
  );
};

export default StepSleep;
