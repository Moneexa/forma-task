import { heading } from "../Workspace.css"
import { useContext } from "react"
import { SolutionsContext } from "../../../store/Solutions"
import Measurement from "./components/measurement/MeasurementCard"
export default function Statistics() {
    const { area } = useContext(SolutionsContext)

    return <div>
        <div className={heading}>Statistics</div>
        <Measurement value={area.value} proposedSolution={area.proposedSolution} name="Area" />
        <Measurement value={0} proposedSolution={0} name="center" />
    </div>
}