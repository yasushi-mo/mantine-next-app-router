import { BarChart } from "@mantine/charts";

const data = [
  { month: "January", profit: 120 },
  { month: "February", profit: -190 },
  { month: "March", profit: 40 },
  { month: "April", profit: 100 },
  { month: "May", profit: -80 },
  { month: "June", profit: 75 },
];

export default function Page() {
  return (
    <BarChart
      h={400}
      data={data}
      dataKey="month"
      series={[{ name: "profit", color: "blue.6" }]}
    />
  );
}
