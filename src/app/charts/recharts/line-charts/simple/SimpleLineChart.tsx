"use client";

import { Line, LineChart } from "recharts";

const data = [
  { name: "A", value: 400 },
  { name: "B", value: 200 },
  { name: "C", value: 300 },
  { name: "D", value: 350 },
  { name: "E", value: 300 },
];

export default function SimpleLineChart() {
  return (
    <LineChart width={400} height={400} data={data}>
      <Line type="monotone" dataKey="value" stroke="#8884d8" />
    </LineChart>
  );
}
