export type Coordinates = number[];

export type Polygon = {
  type: "Polygon";
  coordinates: Coordinates[][];
};

export type Feature = {
  type: "Feature";
  properties: {};
  geometry: Polygon;
};

export type FeatureCollection = {
  type: "FeatureCollection";
  features: Feature[];
};

export type SchemaValidationMessage =
  | {
      status: "success";
      data: FeatureCollection;
    }
  | {
      status: "issue";
      issueMessage: string;
    }
  | {
      status: "error";
      erroMessage: "Unexpected Error Occured";
    };
