import { ScatterChart } from "@mantine/charts";
import { data } from "../page";
import classes from "../css_modules/ScatterChart.module.css";

export default function Demo() {
  return (
    <ScatterChart
      h="400px"
      w="600"
      classNames={{
        axisLabel: classes.axisLabel,
      }}
      data={data}
      dataKey={{ x: "age", y: "BMI" }}
      xAxisLabel="age"
      yAxisLabel="BMI"
    />
  );
}
