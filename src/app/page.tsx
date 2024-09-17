import { Button, Container, Group } from "@mantine/core";

export default function Home() {
  return (
    <Container m="md">
      <Group>
        <Button>Default Button</Button>
        <Button color="red" variant="filled">
          Button with props
        </Button>
      </Group>
    </Container>
  );
}
