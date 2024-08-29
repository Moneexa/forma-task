import { z } from "zod";
import { SchemaValidationMessage } from "../types";

export const validateSchema = (jsonData: string): SchemaValidationMessage => {
  const GeometrySchema = z.object({
    type: z.literal("Polygon"),
    coordinates: z.array(z.array(z.tuple([z.number(), z.number()]))),
  });

  const FeatureSchema = z.object({
    type: z.literal("Feature"),
    properties: z.record(z.unknown()),
    geometry: GeometrySchema,
  });

  const FeatureCollectionSchema = z.object({
    type: z.literal("FeatureCollection"),
    features: z.array(FeatureSchema),
  });
  debugger;

  try {
    const parsedSchema = FeatureCollectionSchema.parse(JSON.parse(jsonData));
    return {
      status: "success",
      data: parsedSchema,
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        status: "issue",
        issueMessage: "Schema Validation Failed: " + error.issues[0].message,
      };
    } else {
      return {
        status: "error",
        erroMessage: "Unexpected Error Occured",
      };
    }
  }
};
