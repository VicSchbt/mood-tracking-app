interface CheckboxProps {
  tag: string;
  isChecked: boolean;
  handleChange: () => void;
  disabled?: boolean;
}

const Checkbox = ({ tag, isChecked, handleChange, disabled = false }: CheckboxProps) => {
  return (
    <label
      className={`bg-neutral-0 rounded-10 flex cursor-pointer items-center gap-100 border border-blue-100 px-150 py-200 text-sm font-medium transition peer-checked:border-blue-600 ${
        disabled ? 'cursor-not-allowed' : 'cursor-pointer'
      }`}
    >
      <input
        type="checkbox"
        value={tag}
        checked={isChecked}
        onChange={handleChange}
        className="peer hidden"
        disabled={disabled}
      />

      {/* Custom checkbox square */}
      <span
        className={`relative flex h-4 w-4 items-center justify-center rounded-[4px] border border-blue-100 transition peer-checked:border-blue-600 peer-checked:bg-blue-600`}
      >
        {/* Checkmark */}
        {isChecked && <img src="/images/icon-check.svg" alt="Check" className="h-100 w-100" />}
      </span>

      <span className={`preset-6 ${disabled ? 'text-neutral-300' : 'text-neutral-900'}`}>
        {tag}
      </span>
    </label>
  );
};

export default Checkbox;
