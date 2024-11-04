"use client";

import { Stack, Title } from "@mantine/core";

import * as d3 from "d3";
import dynamic from "next/dynamic";
import { LineChart } from "@mantine/charts";

const data = [
  { name: "A", value: 400 },
  { name: "B", value: 200 },
  { name: "C", value: 300 },
  { name: "D", value: 350 },
  { name: "E", value: 300 },
];

const width = 600;
const height = 200;
const marginTop = 20;
const marginRight = 20;
const marginBottom = 20;
const marginLeft = 20;

// D3
const x = d3
  .scaleLinear()
  .domain([0, data.length - 1])
  .range([marginLeft, width - marginRight]);

const y = d3
  .scaleLinear()
  .domain(d3.extent(data, (d) => d.value) as [number, number])
  .range([height - marginBottom, marginTop]);

const line = d3
  .line<{ name: string; value: number }>()
  .x((d, i) => x(i))
  .y((d) => y(d.value));

// Recharts
export const DynamicRechartsLineChart = dynamic(
  () => import("../recharts/line-charts/simple/SimpleLineChart"),
  {
    ssr: false,
  },
);

export default function LineCharts() {
  return (
    <Stack gap="lg">
      <Stack gap="md">
        <Title>D3</Title>
        <svg width={width} height={height}>
          <path fill="none" stroke="blue" d={line(data) || undefined} />
          <g stroke="blue">
            {data.map((d, i) => (
              <circle key={i} cx={x(i)} cy={y(d.value)} r="2.5" />
            ))}
          </g>
        </svg>
      </Stack>

      <Stack gap="md">
        <Title>Recharts</Title>
        <DynamicRechartsLineChart />
      </Stack>

      <Stack gap="md">
        <Title>Mantine Charts</Title>
        <LineChart
          h={height}
          w={width}
          data={data}
          dataKey="name"
          series={[{ name: "value", color: "blue" }]}
          curveType="linear"
        />
      </Stack>
    </Stack>
  );
}
