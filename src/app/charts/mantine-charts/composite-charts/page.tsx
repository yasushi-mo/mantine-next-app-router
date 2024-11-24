import { CompositeChart } from "@mantine/charts";
import { data } from "./data";

export default function CompositeCharts() {
  return (
    <CompositeChart
      h={400}
      data={data}
      dataKey="date"
      maxBarWidth={30}
      series={[
        { name: "Apples", color: "green.4", type: "line" },
        { name: "Oranges", color: "orange.4", type: "area" },
        { name: "Tomatoes", color: "yellow.4", type: "bar" },
      ]}
    />
  );
}
