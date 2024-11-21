"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { data } from "../data";

export default function Page() {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const width = 600;
  const height = 400;

  return <svg ref={svgRef} width={width} height={height} />;
}
