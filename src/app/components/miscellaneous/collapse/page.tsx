import { Stack, Text, Title } from "@mantine/core";
import WithExtrasCollapse from "./WithExtrasCollapseCollapse";

export default function Page() {
  return (
    <Stack>
      <Title>Collapse</Title>
      <WithExtrasCollapse
        toggleLabel="Toggle panel"
        collapsibleContent={<Text ta="center">Collapsed texts</Text>}
        leftExtraContent={
          <Title order={2} key={0}>
            {" "}
            h2 title
          </Title>
        }
        rightExtraContent={
          <Title order={2} key={1}>
            h2 title 2nd
          </Title>
        }
      />
    </Stack>
  );
}
