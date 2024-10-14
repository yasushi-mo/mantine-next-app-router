import { Button } from "@mantine/core";
import classes from "./css_modules/Button.module.css";

export default function Buttons() {
  console.log(classes);
  return <Button className={classes.button}>Button</Button>;
}
