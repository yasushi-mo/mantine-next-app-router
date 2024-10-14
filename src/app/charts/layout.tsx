import { Container } from "@mantine/core";
import { ReactNode } from "react";

export default function ChartsLayout({ children }: { children: ReactNode }) {
  return <Container mt="md">{children}</Container>;
}
