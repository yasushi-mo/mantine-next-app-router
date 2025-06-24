"use client";

import { Button, Collapse, Stack, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export default function UpperCollapse() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Stack>
      <Collapse in={opened} transitionDuration={1000}>
        {[...Array(100)].map((_, i) => (
          <Text key={i}>Collapse content</Text>
        ))}
      </Collapse>
      <Button onClick={toggle}>Toggle</Button>
    </Stack>
  );
}
