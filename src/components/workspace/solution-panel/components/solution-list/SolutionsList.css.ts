import { style, styleVariants } from "@vanilla-extract/css";

export const resultStyle = style({
  margin: "5px 0px",
  cursor: "pointer",
  padding: "10px",
  borderRadius: "4px",
  textAlign: "left",
});

export const resultStyleVariant = styleVariants({
  default: {
    color: "black",
    selectors: {
      "&:hover": {
        backgroundColor: "lightgray",
      },
    },
  },
  clicked: {
    backgroundColor: "#e0e2ec",
  },
});
