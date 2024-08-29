import sol1 from "../assets/georesults/SE_State_Management_Polygons_1.json";
import sol2 from "../assets/georesults/SE_State_Management_Polygons_2.json";
import { FeatureCollection } from "../types";

export const INITIAL_SOLUTIONS: FeatureCollection[] = [
  sol1 as FeatureCollection,
  sol2 as FeatureCollection,
];

export const OPERATION_BUTTONS = ["union", "intersection"] as const;

export type OperationType = (typeof OPERATION_BUTTONS)[number];
