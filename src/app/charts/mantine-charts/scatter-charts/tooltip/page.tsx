"use client";

import { ScatterChart } from "@mantine/charts";
import { data } from "./data";
import { Paper, Text } from "@mantine/core";

export default function Page() {
  return (
    <ScatterChart
      h={360}
      data={data}
      dataKey={{ x: "age", y: "BMI" }}
      tooltipProps={{
        content: ({ payload, coordinate }) => {
          if (!payload || !coordinate) return null;

          return (
            <Paper
              w={200}
              p="md"
              shadow="md"
              style={{
                position: "absolute",
                top: `${(coordinate.y || 0) + 10}px`,
                left: `${(coordinate.x || 0) + 10}px`,
              }}
            >
              <Text>
                {payload[0]?.name}: {payload[0]?.value}
              </Text>
              <Text>
                {payload[1]?.name}: {payload[1]?.value}
              </Text>
            </Paper>
          );
        },
      }}
    />
  );
}
