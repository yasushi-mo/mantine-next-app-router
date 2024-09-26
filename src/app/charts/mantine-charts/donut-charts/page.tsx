import { DonutChart } from "@mantine/charts";
import { Stack, Title } from "@mantine/core";

export const data = [
  { name: "USA", value: 400, color: "indigo.6" },
  { name: "India", value: 300, color: "yellow.6" },
  { name: "Japan", value: 100, color: "teal.6" },
  { name: "Other", value: 200, color: "gray.6" },
];

export default function DonutCharts() {
  return (
    <Stack mx="xl" gap="xl">
      <Title>DonutCharts</Title>
      <Stack gap="lg">
        <DonutChart data={data} />;
      </Stack>
      <Stack>
        <DonutChart data={data} withLabels withLabelsLine={false} />
      </Stack>
    </Stack>
  );
}
