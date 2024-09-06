import dynamic from "next/dynamic";

const DynamicSimpleLineChart = dynamic(() => import("./SimpleLineChart"), {
  ssr: false,
});

export default function LineChart() {
  return <DynamicSimpleLineChart />;
}
