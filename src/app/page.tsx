import { Button, Stack, Title } from "@mantine/core";

export default function Home() {
  return (
    <Stack m="md">
      <Title c="red.8">Hello Mantine</Title>
      <Button fz="md" bg="primary">
        Button
      </Button>
    </Stack>
  );
}
