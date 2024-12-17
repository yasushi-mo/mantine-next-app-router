"use client";

import * as d3 from "d3";
import { data } from "./data";

const WIDTH = 640;
const HEIGHT = 360;

export default function Page() {
  // Define D3 scales
  const xScale = d3
    .scaleBand()
    .domain(data.map((d) => d.month))
    .range([0, WIDTH])
    .padding(0.2);

  const yScale = d3.scaleLinear().domain([0, 100]).range([HEIGHT, 0]);

  return (
    <svg width={WIDTH} height={HEIGHT}>
      {/* Bars */}
      {data.map((d) => (
        <rect
          key={d.month}
          x={xScale(d.month) || 0}
          y={yScale(d.income)}
          width={xScale.bandwidth()}
          height={HEIGHT - yScale(d.income)}
          fill="steelblue"
        />
      ))}
    </svg>
  );
}
