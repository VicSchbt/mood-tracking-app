interface StepJournalProps {
  value: string;
  onChange: (val: string) => void;
  onNext: () => void;
  onBack: () => void;
}

const StepJournal = ({ value, onChange, onNext, onBack }: StepJournalProps) => {
  const maxLength = 150;

  return (
    <div className="space-y-200">
      <p className="font-semibold text-neutral-800">Write about your day...</p>

      <div className="relative">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Today, I felt..."
          maxLength={maxLength}
          rows={5}
          className="w-full resize-none rounded-xl border border-gray-300 px-200 py-150 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />

        <span className="absolute right-2 bottom-2 text-xs text-gray-400">
          {value.length}/{maxLength}
        </span>
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
          onClick={onNext}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default StepJournal;
