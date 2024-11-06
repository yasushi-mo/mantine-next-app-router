"use client";

import * as d3 from "d3";
import { useRef, useEffect } from "react";

export default function Page() {
  const data = [
    {
      score: 1,
      count: 2,
    },
    {
      score: 2,
      count: 2,
    },
    {
      score: 3,
      count: 4,
    },
    {
      score: 4,
      count: 5,
    },
    {
      score: 5,
      count: 5,
    },
  ];

  const width = 600;
  const height = 400;
  const margin = { top: 20, right: 20, bottom: 40, left: 40 };

  const xScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.count) || 0]) // `count` values mapped to x-axis
    .range([margin.left, width - margin.right]);

  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.score) || 0]) // `score` values mapped to y-axis
    .range([height - margin.bottom, margin.top]);

  // Create refs for axes
  const xAxisRef = useRef<SVGGElement>(null);
  const yAxisRef = useRef<SVGGElement>(null);

  // Set up x-axis and y-axis with useEffect to handle D3 rendering
  useEffect(() => {
    if (xAxisRef.current) {
      const xAxis = d3.axisBottom(xScale);
      d3.select(xAxisRef.current).call(xAxis);
    }

    if (yAxisRef.current) {
      const yAxis = d3.axisLeft(yScale);
      d3.select(yAxisRef.current).call(yAxis);
    }
  }, [xScale, yScale]);

  return (
    <svg width={width} height={height}>
      {data.map((d, i) => (
        <circle
          key={i}
          cx={xScale(d.count)}
          cy={yScale(d.score)}
          r={5}
          fill="steelblue"
        />
      ))}

      {/* X-axis */}
      <g ref={xAxisRef} transform={`translate(0, ${height - margin.bottom})`} />

      {/* Y-axis */}
      <g ref={yAxisRef} transform={`translate(${margin.left}, 0)`} />
    </svg>
  );
}
