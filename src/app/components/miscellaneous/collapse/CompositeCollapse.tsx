"use client";

import { Button, Collapse, Flex, Group, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ReactNode } from "react";

type CompositeCollapseProps = {
  toggleLabel: string;
  collapsibleContent: ReactNode;
  extraContents: ReactNode[];
};

export default function CompositeCollapse({
  toggleLabel,
  collapsibleContent,
  extraContents,
}: CompositeCollapseProps) {
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <Stack>
      <Flex justify="space-between">
        {extraContents[0]}
        <Group>
          {extraContents[1]}
          <Button onClick={toggle}>{toggleLabel}</Button>
        </Group>
      </Flex>

      <Collapse in={opened}>{collapsibleContent}</Collapse>
    </Stack>
  );
}
