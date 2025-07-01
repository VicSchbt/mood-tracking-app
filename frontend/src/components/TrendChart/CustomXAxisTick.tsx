const CustomXAxisTick = ({ x, y, payload }: any) => {
  const date = new Date(payload.value);
  const month = date.toLocaleDateString('en-US', { month: 'long' }); // e.g. "April"
  const day = date.getDate(); // e.g. 12

  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={12} dy={-4} textAnchor="middle" fontSize="12" fill="#12114D">
        {month}
      </text>
      <text x={0} y={24} textAnchor="middle" fontSize="13" fontWeight="semibold" fill="#12114D">
        {day}
      </text>
    </g>
  );
};

export default CustomXAxisTick;
