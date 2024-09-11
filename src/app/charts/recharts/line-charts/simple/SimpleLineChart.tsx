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
    <LineChart width={600} height={200} data={data}>
      <Line type="linear" dataKey="value" stroke="blue" />
    </LineChart>
  );
}
