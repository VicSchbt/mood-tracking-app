interface ButtonProps {
  label: string;
  disabled?: boolean;
  type?: 'primary' | 'secondary';
  className?: string;
  onClick: () => void;
}

const Button = ({ label, disabled = false, type = 'primary', className, onClick }: ButtonProps) => {
  return (
    <button
      className={`text-neutral-0 preset-4 rounded-10 cursor-pointer px-400 py-200 font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline disabled:cursor-not-allowed disabled:bg-blue-200 disabled:opacity-50 ${className} ${
        type === 'primary'
          ? 'bg-blue-600 hover:bg-blue-700'
          : 'bg-neutral-0 text-neutral-900 hover:bg-neutral-50'
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
