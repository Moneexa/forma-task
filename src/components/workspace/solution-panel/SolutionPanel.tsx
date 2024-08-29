import { solutionPanelDiv } from "./SolutionPanel.css"
import { heading } from "../Workspace.css"
import SolutionsList from "./components/solution-list/SolutionsList"
import FileUpload from "./components/upload-file/FileUpload"
export default function SolutionPanel() {
    return <div className={solutionPanelDiv}>
        <div className={heading}>Solutions</div>
        <div className={solutionPanelDiv}>
            <SolutionsList />
            <FileUpload />
        </div>
    </div >
}

