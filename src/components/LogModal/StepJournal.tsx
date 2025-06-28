import FooterButtons from '../Button/FooterButtons';

interface StepJournalProps {
  value: string;
  onChange: (val: string) => void;
  onNext: () => void;
  onBack: () => void;
}

const StepJournal = ({ value, onChange, onNext, onBack }: StepJournalProps) => {
  const maxLength = 150;

  return (
    <>
      <h3 className="preset-3 font-bold text-neutral-900">Write about your day...</h3>

      <div className="flex flex-col gap-100">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Today, I felt..."
          maxLength={maxLength}
          rows={5}
          className="bg-neutral-0 w-full resize-none rounded-xl border border-gray-300 px-200 py-150 placeholder:text-neutral-600 placeholder:italic focus:ring-2 focus:ring-blue-500 focus:outline-none"
          style={{ fontSize: '18px', lineHeight: '130%', letterSpacing: '0px' }}
        />

        <span className="preset-8 self-end text-neutral-600">
          {value.length}/{maxLength}
        </span>
      </div>

      <FooterButtons onBack={onBack} onNext={onNext} />
    </>
  );
};

export default StepJournal;
