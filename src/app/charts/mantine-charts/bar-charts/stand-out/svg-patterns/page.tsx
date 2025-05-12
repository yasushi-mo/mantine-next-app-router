import { BarChart } from "@mantine/charts";
import { data } from "./data";

function addColorToExtremes(data: { month: string; sales: number }[]) {
  if (data.length === 0) return [];

  const { max, min } = data.reduce(
    (acc, item) => {
      if (item.sales > acc.max) acc.max = item.sales;
      if (item.sales < acc.min) acc.min = item.sales;
      return acc;
    },
    { max: data[0].sales, min: data[0].sales },
  );

  return data.map((d) => {
    if (d.sales === max) return { ...d, color: "url(#blueStripes)" };
    if (d.sales === min) return { ...d, color: "url(#redStripes)" };
    return { ...d };
  });
}

export default function Page() {
  return (
    <BarChart
      h={300}
      data={addColorToExtremes(data)}
      dataKey="month"
      series={[{ name: "sales", color: "teal" }]}
    >
      <defs>
        <pattern
          id="blueStripes"
          patternUnits="userSpaceOnUse"
          width={6}
          height={6}
          patternTransform="rotate(45)"
        >
          <line x1="0" y="0" x2="0" y2="6" stroke="blue" strokeWidth={2} />
        </pattern>
        <pattern
          id="redStripes"
          patternUnits="userSpaceOnUse"
          width={6}
          height={6}
          patternTransform="rotate(45)"
        >
          <line x1="0" y="0" x2="0" y2="6" stroke="red" strokeWidth={2} />
        </pattern>
      </defs>
    </BarChart>
  );
}
