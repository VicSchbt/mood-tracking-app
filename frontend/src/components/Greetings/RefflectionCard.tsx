import { LogEntry } from '../../types';
import Container from '../Container';

interface RefflectionCardProps {
  log: LogEntry;
}

const RefflectionCard = ({ log }: RefflectionCardProps) => {
  const reflection = log.journalEntry;
  const feelings = log.feelings;

  return (
    <Container as="section" className="w-full gap-200 lg:col-span-1">
      <h3 className="preset-6 flex items-center gap-150 text-left font-bold text-neutral-600">
        <img src="/images/icon-reflection.svg" aria-hidden="true" className="h-300 w-300" />
        Reflection of the day
      </h3>
      <p className="preset-6 h-[80px] overflow-hidden text-left text-ellipsis whitespace-nowrap text-neutral-900">
        {reflection}
      </p>
      <ul className="flex gap-150">
        {feelings.map((feeling) => (
          <li key={feeling} className="preset-6-italic text-neutral-600">
            {'#' + feeling}
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default RefflectionCard;
