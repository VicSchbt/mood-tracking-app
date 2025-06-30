import { getMood, MoodValue } from '@/app/lib/moods';
import Container from '../Container';
import { useQuoteStore } from '@/app/store/quoteStore';

interface MoodCardProps {
  mood: MoodValue;
}

const MoodCard = ({ mood }: MoodCardProps) => {
  const { getRandomQuoteForMood } = useQuoteStore();
  const moodConfig = getMood(mood);
  const quote = getRandomQuoteForMood(mood);

  return (
    <Container
      as="section"
      className="relative h-full w-full items-center justify-center overflow-hidden md:items-start md:justify-between lg:col-span-2 lg:row-span-2 lg:p-400"
    >
      <div className="flex flex-col gap-100">
        <p className="preset-3 text-left font-bold text-neutral-600">I'm feeling</p>
        <p className="preset-2 text-left font-bold text-neutral-900">{moodConfig.label}</p>
      </div>

      <img
        src={moodConfig.icon.color}
        alt={moodConfig.label}
        className="h-[200px] w-[200px] md:absolute md:-bottom-1/8 md:left-3/4 md:h-[320px] md:w-[320px] md:-translate-x-1/2"
      />

      <div className="flex flex-col gap-150 md:w-1/2">
        <img src="/images/icon-quote.svg" aria-hidden="true" className="h-300 w-300" />
        <p className="preset-6-italic text-left text-neutral-600">&ldquo;{quote}&rdquo;</p>
      </div>
    </Container>
  );
};

export default MoodCard;
