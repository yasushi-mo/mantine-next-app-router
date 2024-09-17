"use client";

import { Button, createTheme } from "@mantine/core";

export const theme = createTheme({
  colors: {
    blue: [
      "#dff4ff",
      "#b2ddff",
      "#83c5fb",
      "#54aef7",
      "#2997f4",
      "#147edb",
      "#0862ab",
      "#00467b",
      "#002a4c",
      "#000f1e",
    ],
  },
  components: {
    Button: Button.extend({
      defaultProps: {
        color: "cyan",
        variant: "outline",
      },
    }),
  },
});
