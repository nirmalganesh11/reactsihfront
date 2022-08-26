import { LineChart, Line, Tooltip, XAxis } from "recharts";
import ReactDOM from "react-dom";
import React, { useState } from "react";

const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 }
];

const App = () => {
  const [perc, setPerc] = useState(0);
  const onMouseMove = hoveredData => {
    // console.log(hoveredData);
    if (hoveredData && hoveredData.activePayload) {
      const hoveredX = hoveredData.activePayload[0].payload.name;
      const index = data.findIndex(d => d.name === hoveredX);
      const percentage = ((data.length - index - 1) * 100) / (data.length - 1);

      setPerc(100 - percentage);
    }
  };

  const onMouseOut = () => {
    setPerc(0);
  };

  return (
    <LineChart
      width={500}
      height={500}
      data={data}
      onMouseMove={onMouseMove}
      onMouseOut={onMouseOut}
    >
      <defs>
        <linearGradient id="colorUv" x1="0%" y1="0" x2="100%" y2="0">
          <stop offset="0%" stopColor="blue" />
          <stop offset={`${perc}%`} stopColor="blue" />
          <stop offset={`${perc}%`} stopColor="red" />
          <stop offset={`${100}%`} stopColor="red" />
        </linearGradient>
      </defs>
      <Line
        type="monotone"
        dataKey="pv"
        stroke="url(#colorUv)"
        strokeWidth={3}
        dot={false}
        activeDot={false}
      />
      <XAxis />
      <Tooltip />
    </LineChart>
  );
};
export default App

