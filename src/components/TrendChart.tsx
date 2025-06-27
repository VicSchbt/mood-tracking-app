'use client';
import { getSleep, SleepValue } from '@/app/lib/sleep';
import Container from './Container';
import { LogEntry } from '@/types';
import { BarChart, Bar, YAxis, XAxis, Cell, ResponsiveContainer } from 'recharts';
import { getMood, MoodValue } from '@/app/lib/moods';

interface TrendChartProps {
  className?: string;
  logs: LogEntry[];
}

const TrendChart = ({ className, logs }: TrendChartProps) => {
  console.log('chart logs', logs);
  return (
    <Container as="section" className={className}>
      <h2 className="preset-3-mobile md:preset-3 font-semibold text-neutral-900">
        Mood and sleep trends
      </h2>
      {logs && logs.length > 0 && (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={logs} margin={{ top: 20, right: 30, bottom: 5, left: 0 }}>
            <YAxis
              type="number"
              domain={[0, 9.5]}
              ticks={[1, 3.5, 5.5, 7.5, 9.5]}
              tickFormatter={(value) => getSleep(value as SleepValue)}
              axisLine={false}
              tickLine={false}
            />
            <XAxis
              dataKey="createdAt"
              tickFormatter={(dateStr: string) =>
                new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
              }
              axisLine={false}
              tickLine={false}
            />
            <Bar dataKey="sleepHours" radius={[30, 30, 30, 30]} barSize={30}>
              {logs.map((entry) => {
                const mood = getMood(entry.mood as MoodValue);
                return <Cell key={entry.createdAt} fill={mood.colorHex} />;
              })}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      )}
    </Container>
  );
};

export default TrendChart;
