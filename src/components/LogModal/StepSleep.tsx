import { sleepMap, SleepValue } from '@/app/lib/sleep';

interface StepSleepProps {
  sleep: SleepValue | null;
  onSelect: (val: SleepValue) => void;
  onSubmit: () => void;
  onBack: () => void;
}

const sleepOptions: SleepValue[] = [9, 7.5, 5.5, 3.5, 1];

const StepSleep = ({ sleep, onSelect, onSubmit, onBack }: StepSleepProps) => {
  return (
    <div className="space-y-200">
      <p className="font-semibold text-neutral-800">How many hours did you sleep last night?</p>

      <div className="space-y-100">
        {sleepOptions.map((value) => (
          <label
            key={value}
            className={`flex cursor-pointer items-center justify-between rounded-xl border px-200 py-150 ${sleep === value ? 'border-purple-500 bg-purple-50' : 'border-gray-200'} `}
          >
            <input
              type="radio"
              name="sleep"
              value={value}
              checked={sleep === value}
              onChange={() => onSelect(value)}
            />
            <span className="ml-100 font-medium">{sleepMap[value]}</span>
          </label>
        ))}
      </div>

      <div className="flex justify-between gap-150">
        <button
          className="w-full rounded-xl bg-gray-100 py-150 font-semibold text-gray-700"
          onClick={onBack}
        >
          Back
        </button>

        <button
          className="w-full rounded-xl bg-blue-600 py-150 font-semibold text-white"
          onClick={onSubmit}
          disabled={sleep === null}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default StepSleep;
