import { style, styleVariants } from "@vanilla-extract/css";

export const containerStyle = style({
  width: "100%",
  height: "500px",
});

export const buttonRow = style({
  position: "absolute",
  left: "-27%",
  zIndex: "1",
  display: "flex",
  justifyContent: "flex-end",
  width: "100%",
  gap: "10px",
  margin: "10px",
});
export const buttonStyle = style({
  all: "unset",
  padding: "10px",
  borderRadius: "12px",
  cursor: "pointer",
  boxShadow:
    "0px 3px 5px -1px rgba(0, 0, 0, .2), 0px 6px 10px 0px rgba(0, 0, 0, .14), 0px 1px 18px 0px rgba(0, 0, 0, .12);",
});

export const buttonStyleVariant = styleVariants({
  default: {
    color: "darkblue",
    backgroundColor: "#e0e0ff",
    selectors: {
      "&:disabled": {
        backgroundColor: "#dedbd5",
        color: "gray",
      },
    },
  },
  clicked: {
    backgroundColor: "#a194e3",
    color: "whitesmoke",
  },
});
