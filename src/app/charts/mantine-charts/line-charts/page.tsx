import { LineChart } from "@mantine/charts";

const data = [
  { name: "A", value: 400 },
  { name: "B", value: 200 },
  { name: "C", value: 300 },
  { name: "D", value: 350 },
  { name: "E", value: 300 },
];

export default function LineCharts() {
  return (
    <LineChart
      h={400}
      w={600}
      data={data}
      dataKey="name"
      series={[{ name: "value", color: "blue" }]}
      curveType="linear"
    />
  );
}
