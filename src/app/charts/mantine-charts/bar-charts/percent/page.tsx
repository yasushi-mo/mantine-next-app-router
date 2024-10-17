import { BarChart } from "@mantine/charts";
import { data } from "../page";

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
    />
  );
}
