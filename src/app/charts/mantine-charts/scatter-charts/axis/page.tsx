import { ScatterChart } from "@mantine/charts";
import { data } from "../page";
import classes from "../css_modules/ScatterChart.module.css";

export default function Demo() {
  return (
    <ScatterChart
      h={400}
      w={600}
      classNames={{
        axis: classes.axis,
      }}
      data={data}
      dataKey={{ x: "age", y: "BMI" }}
      xAxisProps={{
        label: {
          value: "age",
          position: "bottom",
        },
      }}
      yAxisProps={{
        label: {
          value: "BMI",
          angle: -90,
          position: "insideLeft",
        },
      }}
    />
  );
}
