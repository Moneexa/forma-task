import { style } from "@vanilla-extract/css";

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
