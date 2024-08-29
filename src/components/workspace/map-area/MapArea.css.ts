import { style } from "@vanilla-extract/css";

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
