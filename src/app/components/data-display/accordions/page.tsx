import { Stack, Title } from "@mantine/core";
import CompositeAccordion from "./CompositeAccordion";

export default function Page() {
  return (
    <Stack>
      <Title>Composite Accordion</Title>
      <CompositeAccordion
        value="Apples"
        description="Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads."
      />
    </Stack>
  );
}
