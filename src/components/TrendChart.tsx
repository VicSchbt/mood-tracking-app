import Container from "./Container";

interface TrendChartProps {
  className?: string;
}

const TrendChart = ({ className }: TrendChartProps) => {
    return (
      <Container as="section" className={className}>

        <h2 className="preset-3-mobile md:preset-3 font-semibold text-neutral-900">Mood and sleep trends</h2>
        <div className="preset-8 text-neutral-400 italic">
          {/* Placeholder chart */}
          Not enough data to display chart yet.
        </div>
      </Container>
      
    )
  }

  export default TrendChart;