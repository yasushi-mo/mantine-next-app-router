import { Button } from "@mantine/core";
import classes from "../css_modules/Button.module.css";

export default function Demo() {
  return (
    <Button
      classNames={{
        root: classes.root,
        label: classes.label,
      }}
    >
      Button
    </Button>
  );
}
