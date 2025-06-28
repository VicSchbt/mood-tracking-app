import { FEELING_TAGS } from '@/app/lib/feelings';

interface StepFeelingsProps {
  selected: string[];
  onChange: (tags: string[]) => void;
  onNext: () => void;
  onBack: () => void;
}

const StepFeelings = ({ selected, onChange, onNext, onBack }: StepFeelingsProps) => {
  const toggleTag = (tag: string) => {
    if (selected.includes(tag)) {
      onChange(selected.filter((t) => t !== tag));
    } else if (selected.length < 3) {
      onChange([...selected, tag]);
    }
  };

  return (
    <div className="space-y-200">
      <p className="font-semibold text-neutral-800">How did you feel?</p>
      <p className="text-sm text-neutral-500">Select up to three tags:</p>

      <div className="flex flex-wrap gap-100">
        {FEELING_TAGS.map((tag) => {
          const isSelected = selected.includes(tag);
          return (
            <button
              key={tag}
              type="button"
              onClick={() => toggleTag(tag)}
              className={`py-075 rounded-full border px-150 text-sm ${
                isSelected
                  ? 'border-blue-500 bg-blue-50 font-semibold text-blue-800'
                  : 'border-gray-300 bg-white text-gray-700'
              } `}
            >
              {tag}
            </button>
          );
        })}
      </div>

      <div className="flex justify-between gap-150 pt-200">
        <button
          className="w-1/2 rounded-xl bg-gray-100 py-150 font-semibold text-gray-700"
          onClick={onBack}
        >
          Back
        </button>
        <button
          className="w-1/2 rounded-xl bg-blue-600 py-150 font-semibold text-white"
          onClick={onNext}
          disabled={selected.length === 0}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default StepFeelings;
