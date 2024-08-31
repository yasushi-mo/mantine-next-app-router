// import { Container, Title } from "@mantine/core";
import dynamic from "next/dynamic";

const DynamicSimpleLineCharts = dynamic(() => import("./SimpleLineChart"), {
  ssr: false,
});

export default function LineCharts() {
  return <DynamicSimpleLineCharts />;
}
