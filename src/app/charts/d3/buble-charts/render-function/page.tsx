"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { data } from "../data";

export default function Page() {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const width = 600;
  const height = 400;

  const renderChart = () => {
    // Define scales
    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.element))
      .range([0, width]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.score) || 0])
      .range([height, 0]);

    const sizeScale = d3
      .scaleSqrt()
      .domain([0, d3.max(data, (d) => d.count) || 0])
      .range([0, 30]);

    // Enable D3 API manipulate svg
    const svg = d3.select(svgRef.current);
    // Clear everything before appending new elements
    svg.selectAll("*").remove();
    // Bind data to bubbles
    const bubbles = svg.selectAll(".bubble").data(data);

    // Enter
    bubbles
      .enter()
      .append("circle")
      .attr("class", "bubble")
      .attr("fill", "teal")
      .attr("cx", (d) => xScale(d.element)! + xScale.bandwidth() / 2)
      .attr("cy", (d) => yScale(d.score))
      .attr("r", (d) => sizeScale(d.count));
  };

  useEffect(() => {
    renderChart();
  }, []);

  return <svg ref={svgRef} width={width} height={height} />;
}
