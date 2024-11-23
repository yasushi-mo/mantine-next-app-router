"use client";

import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { data } from "../data";

export default function ComposedCharts() {
  return (
    <ComposedChart width={800} height={450} data={data} layout="vertical">
      <XAxis type="number" />
      <YAxis type="category" dataKey="name" />
      <Tooltip />
      <Legend />
      <CartesianGrid stroke="#f5f5f5" />
      <Area dataKey="amt" fill="#adffff" stroke="#7fbfff" />
      <Bar dataKey="pv" barSize={20} fill="#7fff7f" />
      <Line dataKey="uv" stroke="#ff7f7f" />
    </ComposedChart>
  );
}
