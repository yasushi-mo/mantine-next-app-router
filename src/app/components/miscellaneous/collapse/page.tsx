import { Stack, Text, Title } from "@mantine/core";
import CompositeCollapse from "./CompositeCollapse";

export default function Page() {
  return (
    <Stack>
      <Title>Collapse</Title>
      <CompositeCollapse
        toggleLabel="Toggle panel"
        collapsibleContent={<Text ta="center">Collapsed texts</Text>}
        extraContents={[
          <Title order={2} key={0}>
            h2 title
          </Title>,
          <Title order={2} key={1}>
            h2 title 2nd
          </Title>,
        ]}
      />
    </Stack>
  );
}
