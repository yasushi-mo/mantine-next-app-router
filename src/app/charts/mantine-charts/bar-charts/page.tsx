import { BarChart, ChartReferenceLineProps } from "@mantine/charts";
import { Space, Text, Title } from "@mantine/core";

const data = [
  { month: "January", Smartphones: 1200, Laptops: 900, Tablets: 200 },
  { month: "February", Smartphones: 1900, Laptops: 1200, Tablets: 400 },
  { month: "March", Smartphones: 400, Laptops: 1000, Tablets: 200 },
  { month: "April", Smartphones: 1000, Laptops: 200, Tablets: 800 },
  { month: "May", Smartphones: 800, Laptops: 1400, Tablets: 1200 },
  { month: "June", Smartphones: 750, Laptops: 600, Tablets: 1000 },
];

const REFERENCE_LINES: ChartReferenceLineProps[] = [
  {
    segment: [
      {
        x: "January",
        y: 1200,
      },
      // {
      //   x: "February",
      //   y: 1500,
      // },
      // {
      //   x: "March",
      //   y: 1000,
      // },
      // {
      //   x: "April",
      //   y: 1800,
      // },
      {
        x: "June",
        y: 1500,
      },
    ],
    color: "red.5",
    label: "Profit reached",
    labelPosition: "insideTopRight",
  },
];

export default function BarCharts() {
  return (
    <>
      <Title>Reference lines</Title>
      <Text>
        Use referenceLines prop to render reference lines. Reference lines are
        always rendered behind the chart.
      </Text>
      <Space h="md" />
      <BarChart
        h={300}
        data={data}
        dataKey="month"
        referenceLines={REFERENCE_LINES}
        series={[
          { name: "Smartphones", color: "violet.6" },
          { name: "Laptops", color: "blue.6" },
          { name: "Tablets", color: "teal.6" },
        ]}
      />
    </>
  );
}
