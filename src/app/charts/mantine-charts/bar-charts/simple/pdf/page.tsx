"use client";

import { BarChart } from "@mantine/charts";
import { data } from "./data";
import { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Button } from "@mantine/core";

export default function Page() {
  const chartRef = useRef<HTMLDivElement>(null);

  const downloadPDF = async () => {
    if (!chartRef.current) return;

    const canvas = await html2canvas(chartRef.current);
    const imgSrc = canvas.toDataURL("img/png");

    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "mm",
      format: "a4",
    });

    pdf.addImage(imgSrc, "PNG", 10, 10, 190, 100);
    pdf.save("chart.pdf");
  };

  return (
    <div>
      <div ref={chartRef}>
        <BarChart
          w={640}
          h={360}
          data={data}
          dataKey="month"
          series={[{ name: "income", color: "blue.6" }]}
        />
      </div>
      <Button mt="md" onClick={downloadPDF}>
        Download PDF
      </Button>
    </div>
  );
}
