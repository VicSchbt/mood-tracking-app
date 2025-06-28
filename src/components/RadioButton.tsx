interface RadioButtonProps {
  value: string;
  checked: boolean;
  onChange: () => void;
  children: React.ReactNode;
}

const RadioButton = ({ value, checked, onChange, children }: RadioButtonProps) => {
  return (
    <label
      key={value}
      className={`bg-neutral-0 flex items-center justify-between gap-150 rounded-xl border border-2 px-200 py-150 ${
        checked ? 'border-blue-600' : 'border-blue-100'
      }`}
    >
      <input
        type="radio"
        name="mood"
        value={value}
        checked={checked}
        onChange={onChange}
        className="peer hidden"
      />
      <div
        className={`flex h-250 w-250 items-center justify-center rounded-full border-2 border-blue-100 transition peer-checked:border-[6px] peer-checked:border-blue-600`}
      ></div>
      {children}
    </label>
  );
};

export default RadioButton;
