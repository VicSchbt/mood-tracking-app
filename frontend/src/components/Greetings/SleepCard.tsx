import { getSleep, SleepValue } from '../../app/lib/sleep';
import Container from '../Container';

interface SleepCardProps {
  sleep: SleepValue;
}

const SleepCard = ({ sleep }: SleepCardProps) => {
  const label = getSleep(sleep);

  return (
    <Container as="section" className="w-full gap-200 lg:col-span-1">
      <h3 className="preset-6 flex items-center gap-150 text-left font-bold text-neutral-600">
        <img src="/images/icon-sleep.svg" aria-hidden="true" className="h-300 w-300" />
        Sleep
      </h3>
      <p className="preset-3 text-left text-neutral-900">{label}</p>
    </Container>
  );
};

export default SleepCard;
