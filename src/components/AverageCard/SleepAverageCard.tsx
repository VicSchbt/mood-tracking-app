import { getSleep, SleepValue } from '@/app/lib/sleep';
import { compareLast5WithPrevious5Sleep, isValueEmpty } from '@/app/lib/utils';
import { LogEntry } from '@/types';
import { useEffect, useState } from 'react';
import AverageCard from './AverageCard';
import TendancyLine from './TendancyLine';

type Props = {
  value?: SleepValue | null;
  logs: LogEntry[];
};

const SleepAverageCard = ({ value, logs }: Props) => {
  const [empty, setEmpty] = useState(isValueEmpty(value));
  const [sleep, setSleep] = useState(() => (!isValueEmpty(value) ? getSleep(value) : null));

  useEffect(() => {
    const isEmpty = isValueEmpty(value);
    setEmpty(isEmpty);
    setSleep(!isEmpty ? getSleep(value) : null);
  }, [value]);

  const backgroundColor = !empty ? 'bg-blue-600' : 'bg-blue-100';

  const title = !empty ? sleep : 'Not enough data yet!';

  return (
    <AverageCard title="Average Sleep" backgroundColor={backgroundColor}>
      <div className="flex flex-col justify-start gap-150">
        <div className="flex items-center gap-200">
          {!empty && (
            <img src="/images/icon-sleep.svg" alt="" aria-hidden="true" className="size-300" />
          )}
          <p className="preset-4 font-semibold text-neutral-900">{title}</p>
        </div>
        {!empty ? (
          <TendancyLine
            tendency={compareLast5WithPrevious5Sleep(logs)}
            className="text-neutral-900"
          />
        ) : (
          <p className="preset-7 text-neutral-600">Log 5 check-ins to see your average mood.</p>
        )}
      </div>
    </AverageCard>
  );
};

export default SleepAverageCard;
