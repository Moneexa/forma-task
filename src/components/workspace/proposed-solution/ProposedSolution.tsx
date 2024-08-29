import { useContext } from "react"
import { SolutionsContext } from "../../../store/Solutions"
import { buttonStyle, buttonStyleVariant, proposedSolutionParent } from "./ProposedSolution.css"
import { heading } from "../Workspace.css"
export default function ProposedSolution() {
    const { sols, setSelectedSolIndx, selectedSolIndx } = useContext(SolutionsContext)

    const handleClick = (index: number) => {
        setSelectedSolIndx(index)
    }
    return <div className={proposedSolutionParent}>
        <div className={heading}>Solutions</div>
        <div className={proposedSolutionParent}>
            {
                sols.map((_, index) => {
                    return <div id={`${index}`}
                        className={`${buttonStyle} ${selectedSolIndx === index ? buttonStyleVariant.clicked : buttonStyleVariant.default}`}
                        onClick={() =>
                            handleClick(index)
                        }>{"Geo Result" + index}</div>
                })
            }
        </div>

    </div >
}