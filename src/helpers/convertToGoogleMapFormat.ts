import { FeatureCollection } from "../types";

export const convertToGoogleMapFormat = (solution: FeatureCollection) => {
  return solution.features.map((feature) =>
    feature.geometry.coordinates.flatMap((coord) =>
      coord.map((val) => ({ lng: val[0], lat: val[1] }))
    )
  );
};
