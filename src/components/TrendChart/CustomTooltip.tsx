import { getMood, MoodValue } from '@/app/lib/moods';
import { getSleep, SleepValue } from '@/app/lib/sleep';
import type { LogEntry } from '@/types';

interface TooltipProps {
  active?: boolean;
  payload?: Array<{
    payload: LogEntry;
  }>;
}

interface TooltipSectionProps {
  title: string;
  children: React.ReactNode;
}

const TOOLTIP_CLASSES = {
  container:
    'rounded-10 flex max-w-[175px] flex-col gap-150 border border-blue-100 bg-white p-150 text-sm text-neutral-800 shadow-lg',
  section: 'gap-075 flex flex-col',
  title: 'preset-8 text-neutral-800',
  content: 'preset-7 text-neutral-900',
  moodContent: 'preset-7 flex items-center gap-100 text-neutral-900',
  reflectionContent: 'preset-7 whitespace-pre-wrap text-neutral-900',
  moodIcon: 'h-200 w-200',
} as const;

const TooltipSection = ({ title, children }: TooltipSectionProps) => (
  <div className={TOOLTIP_CLASSES.section}>
    <p className={TOOLTIP_CLASSES.title}>{title}</p>
    {children}
  </div>
);

const CustomTooltip = ({ active, payload }: TooltipProps) => {
  if (!active || !payload || payload.length === 0) {
    return null;
  }

  const logEntry: LogEntry = payload[0].payload;

  try {
    const mood = getMood(logEntry.mood as MoodValue);
    const sleep = getSleep(logEntry.sleepHours as SleepValue);

    return (
      <div className={TOOLTIP_CLASSES.container}>
        <TooltipSection title="Mood">
          <p className={TOOLTIP_CLASSES.moodContent}>
            <img src={mood.icon.color} alt={mood.label} className={TOOLTIP_CLASSES.moodIcon} />
            {mood.label}
          </p>
        </TooltipSection>

        <TooltipSection title="Sleep">
          <p className={TOOLTIP_CLASSES.content}>{sleep}</p>
        </TooltipSection>

        <TooltipSection title="Reflection">
          <p className={TOOLTIP_CLASSES.reflectionContent}>{logEntry.journalEntry}</p>
        </TooltipSection>

        {logEntry.feelings && logEntry.feelings.length > 0 && (
          <TooltipSection title="Tags">
            <p className={TOOLTIP_CLASSES.content}>{logEntry.feelings.join(', ')}</p>
          </TooltipSection>
        )}
      </div>
    );
  } catch (error) {
    console.error('Error rendering tooltip:', error);
    return null;
  }
};

export default CustomTooltip;
