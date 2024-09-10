import { LineChart } from "@mantine/charts";

const data = [
  { name: "A", value: 400 },
  { name: "B", value: 200 },
  { name: "C", value: 300 },
  { name: "D", value: 350 },
  { name: "E", value: 300 },
];

type CustomDotProps = {
  cx?: number;
  cy?: number;
  // payload?: { element: string }; // Define the shape of the payload here
};

function CustomizedDot({ cx, cy }: CustomDotProps) {
  return (
    <circle cx={cx} cy={cy} r={8} stroke="orange" strokeWidth={2} fill="#fff" />
  );
}

export default function CustomizedDotsLineChart() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      series={[{ name: "value", color: "blue" }]}
      lineProps={{ dot: <CustomizedDot /> }}
    />
  );
}
