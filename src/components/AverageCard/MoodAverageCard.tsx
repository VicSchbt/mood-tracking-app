// src/components/AverageCard.tsx

import { getMood, MoodValue } from '@/app/lib/moods';
import AverageCard from './AverageCard';
import { useEffect, useState } from 'react';
import TendancyLine from './TendancyLine';
import { compareLast5WithPrevious5Mood, isValueEmpty } from '@/app/lib/utils/utils';
import { LogEntry } from '@/types';

type Props = {
  value?: MoodValue | null;
  logs: LogEntry[];
};

const MoodAverageCard = ({ value, logs }: Props) => {
  const [empty, setEmpty] = useState(isValueEmpty(value));
  const [mood, setMood] = useState(() =>
    !isValueEmpty(value) ? getMood(value as MoodValue) : null
  );

  useEffect(() => {
    const isEmpty = isValueEmpty(value);
    setEmpty(isEmpty);
    setMood(!isEmpty ? getMood(value as MoodValue) : null);
  }, [value]);

  const backgroundColor = !empty ? mood!.color : 'bg-blue-100';

  const title = !empty ? mood!.label : 'Keep tracking!';

  return (
    <AverageCard title="Average Mood" backgroundColor={backgroundColor}>
      <div className="flex flex-col justify-start gap-150">
        <div className="flex items-center gap-200">
          {!empty && <img src={mood!.icon.white} alt="" aria-hidden="true" className="size-300" />}

          <p className="preset-4 font-semibold text-neutral-900">{title}</p>
        </div>
        {!empty ? (
          <TendancyLine
            tendency={compareLast5WithPrevious5Mood(logs)}
            className="text-neutral-900"
          />
        ) : (
          <p className="preset-7 text-neutral-600">Log 5 check-ins to see your average mood.</p>
        )}
      </div>
    </AverageCard>
  );
};

export default MoodAverageCard;
