import LogMoodButton from './LogMoodButton';

interface GreetingProps {
  className?: string;
  onOpenLogModal: () => void;
}

const Greeting = ({ className, onOpenLogModal }: GreetingProps) => {
  return (
    <div className={`flex flex-col items-center justify-center gap-200 text-center ${className}`}>
      <p className="preset-3-mobile md:preset-3 font-bold text-blue-600">Hello, Lisa!</p>
      <h1 className="preset-1-mobile md:preset-1 font-bold text-neutral-900">
        How are you feeling today?
      </h1>
      <p className="preset-6 text-neutral-600">Wednesday, April 16th, 2025</p>
      <LogMoodButton onClick={onOpenLogModal} />
    </div>
  );
};

export default Greeting;
