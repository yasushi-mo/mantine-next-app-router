import { Button, Container, Group, Stack } from "@mantine/core";
import { IconArrowRight, IconDownload, IconPhoto } from "@tabler/icons-react";

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
        <Group>
          <Button leftSection={<IconPhoto size={14} />} variant="default">
            Gallery
          </Button>

          <Button rightSection={<IconDownload size={14} />}>Download</Button>

          <Button
            variant="light"
            leftSection={<IconPhoto size={14} />}
            rightSection={<IconArrowRight size={14} />}
          >
            Visit gallery
          </Button>
        </Group>
      </Stack>
    </Container>
  );
}
