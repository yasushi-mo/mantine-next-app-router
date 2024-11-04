"use client";

import * as d3 from "d3";

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

  // Generate ticks for axes
  const xTicks = xScale.ticks(5).map((tick) => ({
    value: tick,
    xOffset: xScale(tick),
  }));

  const yTicks = yScale.ticks(5).map((tick) => ({
    value: tick,
    yOffset: yScale(tick),
  }));

  return (
    <svg width={width} height={height}>
      {/* Plot data points */}
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
      <g transform={`translate(0, ${height - margin.bottom})`}>
        {xTicks.map((tick, i) => (
          <g key={i} transform={`translate(${tick.xOffset}, 0)`}>
            <line y2="6" stroke="black" />
            <text
              dy=".71em"
              y="9"
              textAnchor="middle"
              fontSize="10"
              fill="black"
            >
              {tick.value}
            </text>
          </g>
        ))}
      </g>

      {/* Y-axis */}
      <g transform={`translate(${margin.left}, 0)`}>
        {yTicks.map((tick, i) => (
          <g key={i} transform={`translate(0, ${tick.yOffset})`}>
            <line x2="-6" stroke="black" />
            <text x="-9" dy=".32em" textAnchor="end" fontSize="10" fill="black">
              {tick.value}
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
}
