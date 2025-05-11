import { BarChart } from "@mantine/charts";
import { data } from "./data";

export default function Page() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      referenceLines={[
        {
          x: "Jan",
          color: "red",
          label: "min",
          labelPosition: "top",
        },
        {
          x: "Apr",
          color: "blue",
          label: "max",
          labelPosition: "top",
        },
      ]}
      series={[{ name: "sales", color: "teal" }]}
    />
  );
}
