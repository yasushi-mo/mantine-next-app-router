"use client";

import * as d3 from "d3";
import { data } from "../data";
import { useEffect, useRef } from "react";

const WIDTH = 640;
const HEIGHT = 360;
const MARGIN = { top: 20, right: 30, bottom: 30, left: 40 };

export default function Page() {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = d3.select(ref.current);
    svg.selectAll("*").remove();

    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.month))
      .range([MARGIN.left, WIDTH - MARGIN.right])
      .padding(0.2);

    const yScale = d3
      .scaleLinear()
      .domain([0, 100])
      .range([HEIGHT - MARGIN.bottom, MARGIN.top]);

    // ツールチップ
    const tooltip = d3
      .select("body")
      .append("div")
      .style("position", "absolute")
      .style("background", "white")
      .style("border", "1px solid gray")
      .style("border-radius", "4px")
      .style("padding", "4px 8px")
      .style("font-size", "12px")
      .style("visibility", "hidden")
      .style("pointer-events", "none");

    svg
      .selectAll("rect")
      .data(data)
      .join("rect")
      .attr("x", (d) => xScale(d.month) || 0)
      .attr("y", (d) => yScale(d.income))
      .attr("width", xScale.bandwidth())
      .attr("height", (d) => HEIGHT - MARGIN.bottom - yScale(d.income))
      .attr("fill", "steelblue")
      .on("mouseover", (_, d) => {
        tooltip
          .style("visibility", "visible")
          .html(`<strong>${d.month}</strong><br/>Income: ${d.income}`);
      })
      .on("mousemove", (event) => {
        tooltip
          .style("top", `${event.pageY + 10}px`)
          .style("left", `${event.pageX + 10}px`);
      })
      .on("mouseout", () => {
        tooltip.style("visibility", "hidden");
      });

    // X軸の目盛り
    svg
      .append("g")
      .attr("transform", `translate(0, ${HEIGHT - MARGIN.bottom})`)
      .call(d3.axisBottom(xScale));

    // Y軸の目盛り
    svg
      .append("g")
      .attr("transform", `translate(${MARGIN.left}, 0)`)
      .call(d3.axisLeft(yScale));
  }, []);

  return <svg ref={ref} width={WIDTH} height={HEIGHT} />;
}
