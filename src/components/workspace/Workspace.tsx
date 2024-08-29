import { gridParent } from "./Workspace.css"
import ProposedSolution from "./proposed-solution/ProposedSolution"
import MapArea from "./map-area/MapArea"
import Statistics from "./statistics/Statistics"
export default function Workspace() {
    return (<div className={gridParent}>
        <ProposedSolution />
        <MapArea />
        <Statistics />
    </div>)
}