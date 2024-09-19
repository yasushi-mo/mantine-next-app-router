import { Button, Container, Group, Space } from "@mantine/core";

export default function Home() {
  return (
    <Container m="md">
      <Group>
        <Button>Default Button</Button>
        <Button color="red" variant="filled">
          Button with props
        </Button>
      </Group>
      <Space h="xl" />
      <Group>
        <Button size="xxl">XXL Button</Button>
        <Button size="xxs">XXS Button</Button>
      </Group>
    </Container>
  );
}
