import { Container } from "@mantine/core";

export default function Home() {
  const demoProps = {
    bg: "var(--mantine-color-blue-light)",
    h: 400,
    mt: "md",
  };
  return <Container {...demoProps}>Default Container</Container>;
}
