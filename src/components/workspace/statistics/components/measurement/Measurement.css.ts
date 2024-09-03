import { style } from "@vanilla-extract/css";

export const card = style({
  margin: "5px",

  padding: "10px",
  backgroundColor: "#e0e0ff",
  color: "darkblue",
  borderRadius: "5px",
  boxShadow:
    "0px 3px 5px -1px rgba(0, 0, 0, .2), 0px 6px 10px 0px rgba(0, 0, 0, .14), 0px 1px 18px 0px rgba(0, 0, 0, .12);",
});

export const subHeading = style({
  fontSize: "1.3em",
  fontWeight: "bold",
});

export const cardBody = style({
  margin: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "start",
});
export const cardDivider = style({
  border: "none",
  borderTop: "1px solid gray",
});

export const cardFooter = style({
  marginTop: "10px",
  textAlign: "center",
});
