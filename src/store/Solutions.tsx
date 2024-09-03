import React, { createContext, useState } from "react";
import { INITIAL_SOLUTIONS, OperationType } from "../helpers/constants";
import { Feature, FeatureCollection } from "../types";
import * as turf from "@turf/turf"

export const SolutionsContext = createContext<{
    sols: FeatureCollection[],
    addSolution: (solution: FeatureCollection) => void,
    errorMessage: string,
    updateErrorMessage: (msg: string) => void,
    area: { proposedSolution: number, value: number },
    areaCalculation: (polygons: number[]) => void,
    selectedSolIndx: number,
    updateSolIndx: (indx: number) => void,
    operation: (featureIndexes: number[], opName: OperationType) => void
}>({
    sols: INITIAL_SOLUTIONS,
    errorMessage: "",
    updateErrorMessage: () => { },
    addSolution: () => { },
    selectedSolIndx: 0,
    updateSolIndx: () => { },
    areaCalculation: () => { },
    area: { proposedSolution: 0, value: 0 },
    operation: () => { }
});
export const SolutionsProvider = ({ children }: { children?: React.ReactNode }) => {
    const [selectedSolIndx, setSelectedSolIndx] = useState(0)
    const [errorMessage, setErrorMessage] = useState("")
    const [sols, setSols] = useState(INITIAL_SOLUTIONS)
    const [area, setArea] = useState({ proposedSolution: selectedSolIndx, value: 0 })

    const updateSolIndx = (indx: number) => {
        setSelectedSolIndx(indx)
    }
    const updateErrorMessage = (msg: string) => {
        setErrorMessage(msg)
    }
    const getPolygonsOutOfIndex = (indexes: number[]) => {
        const newSolutions = structuredClone(sols)
        const chosenSol = newSolutions[selectedSolIndx]
        const polygonsToChange = indexes.map((index) => {
            return chosenSol.features[index]
        })
        chosenSol.features = polygonsToChange
        return chosenSol
    }
    const operation = (featureIndexes: number[], opName: OperationType) => {
        const polygonToChange = getPolygonsOutOfIndex(featureIndexes)
        const pol3 = opName === "union" ? turf.union(polygonToChange) : turf.intersect(polygonToChange)
        if (pol3?.geometry.type === "MultiPolygon" || !pol3) {
            updateErrorMessage("wrong polygons selected")
            return
        }
        const solution = structuredClone(sols)
        const chosenSol = solution[selectedSolIndx]
        const filteredFeatures = chosenSol.features.filter((feature, indx) => {
            if (!featureIndexes.includes(indx)) {
                return feature
            }
        })
        filteredFeatures.push(pol3 as Feature)
        chosenSol.features = filteredFeatures
        solution[selectedSolIndx] = chosenSol
        setSols(solution)
    }

    const areaCalculation = (polygons: number[]) => {
        const featureColl = getPolygonsOutOfIndex(polygons)
        const polygon = featureColl.features
        const areaCalculated = polygon.reduce((acc: number, feature: Feature) => {
            const area = turf.area(feature)
            return acc + area
        }, 0)
        setArea({ proposedSolution: selectedSolIndx, value: areaCalculated })
    }
    const addSolution = (solution: FeatureCollection) => {
        setSols(currentSol => [...currentSol, solution])
    }

    return <SolutionsContext.Provider value={{
        sols,
        areaCalculation,
        updateErrorMessage,
        errorMessage,
        area,
        operation,
        updateSolIndx,
        selectedSolIndx,
        addSolution
    }}>
        {children}
    </SolutionsContext.Provider>
}