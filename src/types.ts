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
