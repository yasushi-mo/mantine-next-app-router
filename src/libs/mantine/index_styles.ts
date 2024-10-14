import { Button, createTheme, rem } from "@mantine/core";

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
      },
      styles: {
        label: {
          color: "black",
        },
      },
      vars: (theme, props) => {
        if (props.size === "xxl") {
          return {
            root: {
              "--button-height": rem(60),
              "--button-padding-x": rem(30),
              "--button-fz": rem(24),
            },
          };
        }

        if (props.size === "xxs") {
          return {
            root: {
              "--button-height": rem(24),
              "--button-padding-x": rem(10),
              "--button-fz": rem(10),
            },
          };
        }

        return { root: {} };
      },
    }),
  },
});
