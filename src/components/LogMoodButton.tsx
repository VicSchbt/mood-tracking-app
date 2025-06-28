interface LogMoodButtonProps {
  onClick: () => void;
}

const LogMoodButton = ({ onClick }: LogMoodButtonProps) => {
  return (
    <button
      className="text-neutral-0 preset-5 rounded-10 bg-blue-600 px-400 py-200 hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline disabled:cursor-not-allowed disabled:bg-blue-200 disabled:opacity-50"
      onClick={onClick}
    >
      Log today's mood
    </button>
  );
};

export default LogMoodButton;
