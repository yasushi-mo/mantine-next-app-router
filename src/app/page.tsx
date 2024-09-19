import { Button, Container, Group, Stack } from "@mantine/core";

export default function Home() {
  return (
    <Container m="md">
      <Stack gap="md">
        <Group>
          <Button>Default Button</Button>
          <Button color="red" variant="filled">
            Button with props
          </Button>
        </Group>
        <Group>
          <Button size="xxl">XXL Button</Button>
          <Button size="xxs">XXS Button</Button>
        </Group>
      </Stack>
    </Container>
  );
}
