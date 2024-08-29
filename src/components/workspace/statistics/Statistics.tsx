import { useContext } from "react"
import { SolutionsContext } from "../../../store/Solutions"
import AreaCard from "./statistics-widget/area/AreaCard"
import { heading } from "../Workspace.css"
export default function Statistics() {
    const { area } = useContext(SolutionsContext)
    return <div>
        <div className={heading}>Statistics</div>
        <AreaCard area={area} />
    </div>
}