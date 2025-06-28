import { FEELING_TAGS } from '@/app/lib/feelings';
import Checkbox from '../Checkbox';
import FooterButtons from '../Button/FooterButtons';

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
    <>
      <div className="gap-075 flex flex-col">
        <h3 className="preset-3 font-bold text-neutral-900">How did you feel?</h3>
        <p className="preset-6 text-neutral-600">Select up to three tags:</p>
      </div>

      <div className="flex flex-wrap gap-x-200 gap-y-150">
        {FEELING_TAGS.map((tag) => {
          const isSelected = selected.includes(tag);
          return (
            <Checkbox
              key={tag}
              tag={tag}
              isChecked={isSelected}
              handleChange={() => toggleTag(tag)}
              disabled={selected.length >= 3 && !isSelected}
            />
          );
        })}
      </div>

      <FooterButtons onBack={onBack} onNext={onNext} disabled={selected.length === 0} />
    </>
  );
};

export default StepFeelings;
