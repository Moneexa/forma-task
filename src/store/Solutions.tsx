import React, { createContext, useState } from "react";
import { INITIAL_SOLUTIONS, OperationType } from "../helper-functions/constants";
import { Feature, FeatureCollection } from "../types";
import * as turf from "@turf/turf"

export const SolutionsContext = createContext<{
    sols: FeatureCollection[],
    areaCalculation: (polygon1: Feature[]) => void,
    addSolution: (solution: FeatureCollection) => void,
    area: { proposedSolution: number, value: number },
    selectedSolIndx: number,
    selectedSol: FeatureCollection,
    setSelectedSolIndx: (indx: number) => void,
    operation: (solIndx: number, featureIndex1: number, featureIndex2: number, opName: OperationType) => void
}>({
    sols: INITIAL_SOLUTIONS,
    addSolution: () => { },
    selectedSolIndx: 0,
    selectedSol: INITIAL_SOLUTIONS[0],
    setSelectedSolIndx: () => { },
    areaCalculation: () => { },
    area: { proposedSolution: 0, value: 0 },
    operation: () => { }
});
export const SolutionsProvider = ({ children }: { children?: React.ReactNode }) => {
    const [selectedSolIndx, setSelectedSolIndx] = useState(0)
    const [sols, setSols] = useState(INITIAL_SOLUTIONS)
    const [area, setArea] = useState({ proposedSolution: selectedSolIndx, value: 0 })
    const selectedSol = sols[selectedSolIndx]

    const operation = (solIndx: number, featureIndex1: number, featureIndex2: number, opName: OperationType) => {
        debugger
        const newSolutions = structuredClone(sols)
        const chosenSol = newSolutions[solIndx]
        const pol1 = chosenSol.features[featureIndex1]
        const pol2 = chosenSol.features[featureIndex2]
        const geoJsonPol1: Feature = {
            type: 'Feature',
            properties: {},
            geometry: {
                type: 'Polygon',
                coordinates: pol1.geometry.coordinates
            }
        };
        const geoJsonPol2: Feature = {
            type: 'Feature',
            properties: {},

            geometry: {
                type: 'Polygon',
                coordinates: pol2.geometry.coordinates
            }
        };
        const pol3 = opName == "union" ? turf.union({
            type: "FeatureCollection",
            features: [geoJsonPol1, geoJsonPol2]
        }) : turf.intersect({
            type: "FeatureCollection",
            features: [geoJsonPol1, geoJsonPol2]
        })
        if (pol3?.geometry.type === "MultiPolygon") {
            return
        }
        const filteredFeatures = chosenSol.features.filter((_, indx) => (indx !== featureIndex1 && indx !== featureIndex2))
        if (pol3 != null) {
            filteredFeatures.push(pol3 as Feature)
        }
        chosenSol.features = filteredFeatures
        newSolutions[solIndx] = chosenSol
        setSols(newSolutions)
    }

    const areaCalculation = (pol1: Feature[]) => {
        const areaCalculated = pol1.reduce((acc: number, feature: Feature) => {
            const area = turf.area(feature)
            return acc + area
        }, 0)
        setArea({ proposedSolution: selectedSolIndx, value: areaCalculated })
    }
    const addSolution = (solution: FeatureCollection) => {
        setSols(currentSol => [...currentSol, solution])
    }

    return <SolutionsContext.Provider value={{ sols: sols, areaCalculation: areaCalculation, area: area, operation: operation, setSelectedSolIndx, selectedSol, selectedSolIndx, addSolution: addSolution }}>
        {children}
    </SolutionsContext.Provider>
}