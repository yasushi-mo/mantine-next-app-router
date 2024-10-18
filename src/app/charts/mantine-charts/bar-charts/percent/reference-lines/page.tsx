import { BarChart, ChartReferenceLineProps } from "@mantine/charts";
import { data } from "../../page";

const REFERENCE_LINES: ChartReferenceLineProps[] = [
  {
    x: "January",
    color: "red.5",
  },
  {
    y: 50,
    color: "green.5",
  },
  {
    segment: [
      {
        x: "January",
        y: "100%",
      },
      {
        x: "February",
        y: "80%",
      },
      {
        x: "March",
        y: 1000,
      },
      {
        x: "April",
        y: 1800,
      },
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

export default function PercentBarChart() {
  return (
    <BarChart
      h={400}
      data={data}
      dataKey="month"
      series={[
        { name: "Smartphones", color: "violet.6" },
        { name: "Laptops", color: "blue.6" },
        { name: "Tablets", color: "teal.6" },
      ]}
      type="percent"
      referenceLines={REFERENCE_LINES}
    />
  );
}
