'use client';
import Container from '../Container';
import { LogEntry } from '@/types';
import {
  BarChart,
  Bar,
  YAxis,
  XAxis,
  Cell,
  ResponsiveContainer,
  LabelList,
  ReferenceLine,
  Tooltip,
} from 'recharts';
import { getMood, MoodValue } from '@/app/lib/moods';
import CustomXAxisTick from './CustomXAxisTick';
import CustomYAxisTick from './CustomYAxisTick';
import { sleepIndexMap, SleepValue } from '@/app/lib/sleep';
import CustomTooltip from './CustomTooltip';

interface TrendChartProps {
  className?: string;
  logs: LogEntry[];
}

const TrendChart = ({ className, logs }: TrendChartProps) => {
  const transformedLogs = logs.map((log) => ({
    ...log,
    sleepIndex: sleepIndexMap[log.sleepHours as SleepValue],
  }));

  return (
    <Container as="section" className={className}>
      <h2 className="preset-3-mobile md:preset-3 font-semibold text-neutral-900">
        Mood and sleep trends
      </h2>
      {transformedLogs && transformedLogs.length > 0 && (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={transformedLogs.slice(-11)}
            margin={{ top: 20, right: 10, bottom: 10, left: 10 }}
          >
            {[1, 2, 3, 4, 5].map((i) => (
              <ReferenceLine key={i} y={i} stroke="#E0E6FA" strokeWidth={1} />
            ))}
            <YAxis
              type="number"
              domain={[0, 5]}
              ticks={[0, 1, 2, 3, 4, 5]}
              axisLine={false}
              tickLine={false}
              tick={<CustomYAxisTick />}
            />
            <XAxis
              dataKey="createdAt"
              axisLine={false}
              tickLine={false}
              interval={0}
              tick={<CustomXAxisTick />}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />
            <Bar dataKey="sleepIndex" radius={[30, 30, 30, 30]} barSize={40}>
              <LabelList
                dataKey="mood"
                content={({ x, y, value }) => {
                  const mood = getMood(value as MoodValue);

                  return (
                    <image
                      href={mood.icon.white}
                      x={Number(x) + 5}
                      y={Number(y) + 5}
                      width={30}
                      height={30}
                    />
                  );
                }}
              />
              {transformedLogs.map((entry) => {
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
