import { getSleep, sleepSteps } from '../../app/lib/sleep';
/**
 * Custom Y-axis tick component for the trend chart
 *
 * This component renders custom tick labels for the Y-axis of the sleep trend chart.
 * It displays sleep duration labels with a sleep icon for each tick value.
 *
 * @param x - The x coordinate for positioning the tick (provided by Recharts)
 * @param y - The y coordinate for positioning the tick (provided by Recharts)
 * @param payload - The tick payload containing the value and other metadata (provided by Recharts)
 * @returns JSX element representing the custom tick or null for index 0
 *
 * @example
 * <CustomYAxisTick x={50} y={100} payload={{ value: 2 }} />
 * // Renders: [sleep icon] "2-4 hours"
 */

const CustomYAxisTick = ({ x, y, payload }: any) => {
  const index = payload.value;

  if (index === 0) {
    return null;
  }

  const sleepValue = sleepSteps[index - 1];
  return (
    <g transform={`translate(${x},${y})`}>
      <image href="/images/icon-sleep.svg" x={-60} y={-5} width={10} height={10} fill="#57577B" />
      <text x={-44} y={0} textAnchor="start" fontSize="12" fill="#57577B" dominantBaseline="middle">
        {getSleep(sleepValue)}
      </text>
    </g>
  );
};

export default CustomYAxisTick;
