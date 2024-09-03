import { useContext } from "react"
import { SolutionsContext } from "../../../../../store/Solutions"
import { resultStyleVariant, resultStyle } from "./SolutionsList.css"
export default function SolutionsList() {
    const { sols, updateSolIndx, selectedSolIndx } = useContext(SolutionsContext)
    const handleSolutionClick = (index: number) => {
        updateSolIndx(index)
    }
    return (<div>
        {
            sols.map((_, index) => {
                return <div id={`${index}`}
                    className={`
                        ${resultStyle} 
                        ${selectedSolIndx === index
                            ? resultStyleVariant.clicked
                            : resultStyleVariant.default}`
                    }
                    onClick={() =>
                        handleSolutionClick(index)
                    }>{"Geo Result" + index}</div>
            })
        }
    </div>)
}