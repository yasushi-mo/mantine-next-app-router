import { BarChart } from "@mantine/charts";

const data = [
  { month: "January", gap: 20 },
  { month: "February", gap: 60 },
  { month: "March", gap: 40 },
  { month: "April", gap: 100 },
  { month: "May", gap: 50 },
  { month: "June", gap: 70 },
];

export default function Page() {
  return (
    <BarChart
      h={400}
      data={data}
      dataKey="month"
      series={[{ name: "gap", color: "blue.6" }]}
      yAxisProps={{
        reversed: true,
      }}
      xAxisProps={{
        orientation: "top",
      }}
    />
  );
}
