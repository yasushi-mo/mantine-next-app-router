import {
  Accordion,
  AccordionControl,
  AccordionItem,
  AccordionPanel,
  Flex,
  Title,
} from "@mantine/core";

type CompositeAccordionProps = {
  value: string;
  description: string;
};

export default function CompositeAccordion({
  value,
  description,
}: CompositeAccordionProps) {
  return (
    <Accordion>
      <AccordionItem value={value}>
        <Flex justify="space-between">
          <Title order={2}>title</Title>
          <AccordionControl>{value}</AccordionControl>
        </Flex>
        <AccordionPanel>{description}</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
