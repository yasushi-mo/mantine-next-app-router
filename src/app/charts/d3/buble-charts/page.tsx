"use client";

import * as d3 from "d3";
import { data } from "./data";
import { useEffect, useRef } from "react";

export default function Page() {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const width = 600;
  const height = 400;

  useEffect(() => {
    if (svgRef.current) {
      const svg = d3.select(svgRef.current);
      svg.selectAll("*").remove(); // Clear previous content

      const xScale = d3
        .scaleBand()
        .domain(data.map((d) => d.element))
        .range([0, width])
        .padding(0.1);

      const yScale = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.score) || 0])
        .range([height, 0]);

      const sizeScale = d3
        .scaleSqrt()
        .domain([0, d3.max(data, (d) => d.count) || 0])
        .range([0, 30]); // Adjust bubble size

      // Add x and y axes
      svg
        .append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(d3.axisBottom(xScale));

      svg.append("g").call(d3.axisLeft(yScale));

      // Create bubbles
      svg
        .selectAll(".bubble")
        .data(data)
        .enter()
        .append("circle")
        .attr("class", "bubble")
        .attr("cx", (d) => xScale(d.element)! + xScale.bandwidth() / 2)
        .attr("cy", (d) => yScale(d.score))
        .attr("r", (d) => sizeScale(d.count))
        .attr("fill", "teal")
        .attr("opacity", 0.6);
    }
  }, [svgRef]);

  return <svg ref={svgRef} width={width} height={height} />;
}
