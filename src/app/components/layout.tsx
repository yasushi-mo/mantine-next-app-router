import { Container } from "@mantine/core";
import { ReactNode } from "react";

export default function ComponentsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <Container mt="md">{children}</Container>;
}
