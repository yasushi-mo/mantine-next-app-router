"use client";

import * as d3 from "d3";
import { useEffect, useRef } from "react";

export default function Page() {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const width = 600;
  const height = 400;

  const data = [
    {
      element: "A",
      averageScore: 3,
      result: [
        { score: 1, count: 2 },
        { score: 2, count: 2 },
        { score: 3, count: 4 },
      ],
    },
    {
      element: "B",
      averageScore: 1,
      result: [
        { score: 1, count: 0 },
        { score: 2, count: 5 },
        { score: 3, count: 3 },
      ],
    },
    {
      element: "C",
      averageScore: 2,
      result: [
        { score: 1, count: 7 },
        { score: 2, count: 7 },
        { score: 3, count: 1 },
      ],
    },
  ];

  useEffect(() => {
    if (svgRef.current) {
      const svg = d3.select(svgRef.current);
      svg.selectAll("*").remove(); // Clear previous content

      const bubbleData = data.flatMap(({ element, result }) =>
        result.map(({ score, count }) => ({
          element,
          score,
          count,
        })),
      );

      // Define scales
      const xScale = d3
        .scaleBand()
        .domain(data.map((d) => d.element))
        .range([0, width])
        .padding(0.1);

      const yScale = d3
        .scaleLinear()
        .domain([0, d3.max(bubbleData, (d) => d.score) || 0])
        .range([height, 0]);

      const sizeScale = d3
        .scaleSqrt()
        .domain([0, d3.max(bubbleData, (d) => d.count) || 0])
        .range([0, 30]); // Adjust bubble size

      // Add axes
      const xAxis = d3.axisBottom(xScale);
      svg.append("g").attr("transform", `translate(0, ${height})`).call(xAxis);

      const yAxis = d3.axisLeft(yScale);
      svg.append("g").call(yAxis);

      // Add x-axis label
      svg
        .append("text")
        .attr("transform", `translate(${width / 2}, ${height + 30})`)
        .style("text-anchor", "middle")
        .text("Element");

      // Add y-axis label
      svg
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - 40)
        .attr("x", 0 - height / 2)
        .style("text-anchor", "middle")
        .text("Score");

      // Create bubbles
      svg
        .selectAll(".bubble")
        .data(bubbleData)
        .enter()
        .append("circle")
        .attr("class", "bubble")
        .attr("cx", (d) => xScale(d.element)! + xScale.bandwidth() / 2)
        .attr("cy", (d) => yScale(d.score))
        .attr("r", (d) => sizeScale(d.count))
        .attr("fill", "teal")
        .attr("opacity", 0.6);

      // Prepare data for the line chart
      const lineData = data.map((d) => ({
        element: d.element,
        averageScore: d.averageScore,
      }));

      // Create line
      const line = d3
        .line<{ element: string; averageScore: number }>()
        .x((d) => xScale(d.element)! + xScale.bandwidth() / 2)
        .y((d) => yScale(d.averageScore));

      // Draw the line
      svg
        .append("path")
        .datum(lineData)
        .attr("fill", "none")
        .attr("stroke", "orange")
        .attr("stroke-width", 2)
        .attr("d", line);

      // Add line chart label
      svg
        .append("text")
        .attr("x", width - 100)
        .attr("y", yScale(data[0].averageScore) - 10)
        .style("fill", "orange")
        .text("Average Score");
    }
  }, [svgRef]);

  return <svg ref={svgRef} width={width} height={height} />;
}
