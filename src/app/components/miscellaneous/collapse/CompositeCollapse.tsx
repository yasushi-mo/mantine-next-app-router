"use client";

import { Button, Collapse, Flex, Stack, Text, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export default function CompositeCollapse() {
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <Stack>
      <Flex justify="space-between">
        <Title order={2}>h2 title</Title>
        <Button onClick={toggle}>Toggle Content</Button>
      </Flex>

      <Collapse in={opened}>
        <Text ta="center">Collapsed texts</Text>
      </Collapse>
    </Stack>
  );
}
