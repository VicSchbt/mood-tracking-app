import { useLogStore } from '@/app/store/logStore';
import Button from '../Button/Button';
import { formatDateWithOrdinal } from '@/app/lib/utils/date';
import MoodCard from './MoodCard';
import { MoodValue } from '@/app/lib/moods';

interface GreetingProps {
  className?: string;
  onOpenLogModal: () => void;
}

const Greeting = ({ className, onOpenLogModal }: GreetingProps) => {
  const { getLastLog } = useLogStore();
  const lastLog = getLastLog();

  const hasLoggedToday =
    lastLog?.createdAt.split('T')[0] === new Date().toISOString().split('T')[0];

  const today = formatDateWithOrdinal(new Date());

  return (
    <div className={`flex flex-col items-center justify-center gap-200 text-center ${className}`}>
      <p className="preset-3-mobile md:preset-3 font-bold text-blue-600">Hello, Lisa!</p>
      <h1 className="preset-1-mobile md:preset-1 font-bold text-neutral-900">
        How are you feeling today?
      </h1>
      <p className="preset-6 text-neutral-600">{today}</p>
      {!hasLoggedToday ? (
        <Button label="Log today's mood" onClick={onOpenLogModal} />
      ) : (
        <div className="grid w-full grid-cols-1 gap-400 lg:grid-cols-3">
          <MoodCard mood={lastLog?.mood as MoodValue} />
          {/* <SleepCard sleep={lastLog?.sleep} />
            <ReflectionCard reflection={lastLog?.reflection} /> */}
        </div>
      )}
    </div>
  );
};

export default Greeting;
