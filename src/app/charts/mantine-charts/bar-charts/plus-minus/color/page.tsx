import { BarChart } from "@mantine/charts";

const data = [
  { month: "January", plusProfit: 120 },
  { month: "February", minusProfit: -190 },
  { month: "March", plusProfit: 40 },
  { month: "April", plusProfit: 100 },
  { month: "May", minusProfit: -80 },
  { month: "June", plusProfit: 75 },
];

export default function Page() {
  return (
    <BarChart
      h={400}
      data={data}
      dataKey="month"
      series={[
        { name: "plusProfit", color: "blue.6" },
        { name: "minusProfit", color: "red.6" },
      ]}
    />
  );
}
