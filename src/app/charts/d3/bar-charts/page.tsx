"use client";

import * as d3 from "d3";
import { data } from "./data";
import { useEffect, useRef } from "react";

const WIDTH = 640;
const HEIGHT = 360;

export default function Page() {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = d3.select(ref.current); // SVG の操作を有効化
    svg.selectAll("*").remove(); // SVG を初期化

    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.month))
      .range([0, WIDTH])
      .padding(0.2);

    const yScale = d3.scaleLinear().domain([0, 100]).range([0, HEIGHT]);

    svg
      .selectAll("rect") // 棒グラフを表示するための SVG の要素を選択
      .data(data) // 要素とデータの紐づけ
      .join("rect") // データに対応する分の要素を追加
      .attr("x", (d) => xScale(d.month) || 0) // X軸の表示位置
      .attr("y", (d) => yScale(d.income)) // Y軸の表示位置
      .attr("width", xScale.bandwidth()) // 横幅
      .attr("height", (d) => yScale(100) - yScale(d.income)) // 高さ
      .attr("fill", "steelblue"); // 色
  }, []);

  return <svg ref={ref} width={WIDTH} height={HEIGHT} />;
}
