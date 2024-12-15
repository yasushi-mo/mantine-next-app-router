import { ScatterChart } from "@mantine/charts";
import { data } from "./data";

export default function Page() {
  return <ScatterChart h={360} data={data} dataKey={{ x: "age", y: "BMI" }} />;
}
