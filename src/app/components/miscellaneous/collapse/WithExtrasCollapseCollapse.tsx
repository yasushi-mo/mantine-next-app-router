"use client";

import { Button, Collapse, Flex, Group, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ReactNode } from "react";

type WithExtrasCollapseCollapseProps = {
  toggleLabel: string;
  collapsibleContent: ReactNode;
  leftExtraContent?: ReactNode;
  rightExtraContent?: ReactNode;
};

export default function WithExtrasCollapse({
  toggleLabel,
  collapsibleContent,
  leftExtraContent,
  rightExtraContent,
}: WithExtrasCollapseCollapseProps) {
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <Stack>
      <Flex justify="space-between">
        {leftExtraContent}
        <Group>
          {rightExtraContent}
          <Button onClick={toggle}>{toggleLabel}</Button>
        </Group>
      </Flex>

      <Collapse in={opened}>{collapsibleContent}</Collapse>
    </Stack>
  );
}
