"use client";

import { Container, Title } from "@mantine/core";
import { Line, LineChart } from "recharts";

const data = [
  { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 200, pv: 2400, amt: 2400 },
  { name: "Page C", uv: 300, pv: 2400, amt: 2400 },
];

export default function LineCharts() {
  return (
    <Container>
      <Title>Line Chart</Title>
      <LineChart width={400} height={400} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      </LineChart>
    </Container>
  );
}
