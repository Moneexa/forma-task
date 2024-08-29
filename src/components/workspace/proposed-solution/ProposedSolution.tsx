import { proposedSolutionParent } from "./ProposedSolution.css"
import { heading } from "../Workspace.css"
import SolutionsList from "./solution-widgets/solution-list/SolutionsList"
import FileUpload from "./solution-widgets/upload-file/FileUpload"
export default function ProposedSolution() {
    return <div className={proposedSolutionParent}>
        <div className={heading}>Solutions</div>
        <div className={proposedSolutionParent}>
            <SolutionsList />
            <FileUpload />
        </div>

    </div >
}