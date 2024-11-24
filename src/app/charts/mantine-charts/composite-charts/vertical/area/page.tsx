import { AreaChart } from "@mantine/charts";
import { data } from "../../data";

export default function Page() {
  return (
    <AreaChart
      h={400}
      data={data}
      dataKey="date"
      orientation="vertical"
      series={[
        { name: "Apples", color: "green.4" },
        { name: "Oranges", color: "orange.4" },
        { name: "Tomatoes", color: "yellow.4" },
      ]}
    />
  );
}
