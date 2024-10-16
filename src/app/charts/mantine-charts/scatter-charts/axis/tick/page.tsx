import { ScatterChart } from "@mantine/charts";
import { data } from "../../page";

export default function Demo() {
  return (
    <ScatterChart
      h={400}
      w={600}
      data={data}
      dataKey={{ x: "age", y: "BMI" }}
      xAxisProps={{
        tick: { stroke: "red" },
      }}
      yAxisProps={{
        tick: { stroke: "red" },
      }}
    />
  );
}
