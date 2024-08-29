import { gridParent } from "./Workspace.css"
import MapArea from "./map-area/MapArea"
import SolutionPanel from "./solution-panel/SolutionPanel"
import Statistics from "./statistics/Statistics"
export default function Workspace() {
    return (<div className={gridParent}>
        <SolutionPanel />
        <MapArea />
        <Statistics />
    </div>)
}