"use client";

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
  Svg,
  Rect,
} from "@react-pdf/renderer";
import { Button } from "@mantine/core";
import { data } from "./data";

const styles = StyleSheet.create({
  page: { padding: 20 },
  title: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
  chartContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  footer: { fontSize: 10, marginTop: 20, textAlign: "center" },
});

// Generate the bar chart as an SVG
const ChartSVG = () => {
  const maxValue = Math.max(...data.map((d) => d.income)); // Find max income for scaling
  const barWidth = 30;
  const gap = 10;
  const chartHeight = 100;

  return (
    <Svg width={250} height={chartHeight + 40}>
      {data.map((d, i) => {
        const barHeight = (d.income / maxValue) * chartHeight;
        return (
          <Rect
            key={d.month}
            x={i * (barWidth + gap)}
            y={chartHeight - barHeight}
            width={barWidth}
            height={barHeight}
            fill="blue"
          />
        );
      })}
    </Svg>
  );
};

// Create the PDF document
const ChartPDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>Monthly Income Chart</Text>
      <View style={styles.chartContainer}>
        <ChartSVG />
      </View>
      <Text style={styles.footer}>
        Generated on: {new Date().toLocaleDateString()}
      </Text>
    </Page>
  </Document>
);

export default function PageComponent() {
  return (
    <div>
      <Button
        component={PDFDownloadLink}
        document={<ChartPDF />}
        fileName="chart.pdf"
      >
        Download PDF
      </Button>
    </div>
  );
}
