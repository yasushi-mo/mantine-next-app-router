import { BarChart } from "@mantine/charts";
import { data } from "./data";

export default function Page() {
  return (
    <BarChart
      w={640}
      h={360}
      data={data}
      dataKey="month"
      series={[{ name: "income", color: "blue.6" }]}
    />
  );
}
