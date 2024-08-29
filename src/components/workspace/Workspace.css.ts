import { style, styleVariants } from "@vanilla-extract/css";

export const gridParent = style({
  display: "grid",
  gridTemplateColumns: "1fr 3fr 1fr",
  gap: "10px",
  padding: "10px",
});

export const heading = style({
  fontSize: "1.5em",
  fontWeight: "bold",
  marginBottom: "10px",
});
export const buttonStyle = style({
  all: "unset",
  textAlign: "center",
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
