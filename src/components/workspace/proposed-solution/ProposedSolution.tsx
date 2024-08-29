import { useContext, useRef } from "react"
import { SolutionsContext } from "../../../store/Solutions"
import { buttonStyle, buttonStyleVariant, proposedSolutionParent } from "./ProposedSolution.css"
import { heading } from "../Workspace.css"
import { FeatureCollection } from "../../../types"
export default function ProposedSolution() {
    const { sols, setSelectedSolIndx, selectedSolIndx, addSolution } = useContext(SolutionsContext)
    const fileInputRef = useRef<HTMLInputElement>(null)
    const handleSolutionClick = (index: number) => {
        setSelectedSolIndx(index)
    }

    const handleFileUploadButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const content = e.target?.result;
                if (typeof content === 'string') {
                    try {
                        const jsonContent: FeatureCollection = JSON.parse(content);
                        addSolution(jsonContent);
                    } catch (error) {
                        console.error('Error parsing JSON:', error);
                    }
                }
            };
            reader.readAsText(file);
        }
    };
    return <div className={proposedSolutionParent}>
        <div className={heading}>Solutions</div>
        <div className={proposedSolutionParent}>
            {
                sols.map((_, index) => {
                    return <div id={`${index}`}
                        className={`${buttonStyle} ${selectedSolIndx === index ? buttonStyleVariant.clicked : buttonStyleVariant.default}`}
                        onClick={() =>
                            handleSolutionClick(index)
                        }>{"Geo Result" + index}</div>
                })
            }
        </div>
        <button className={`${buttonStyle} ${buttonStyleVariant.default}`} onClick={handleFileUploadButtonClick}>
            Upload JSON File
        </button>
        <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            accept=".json"
            onChange={handleFileChange}
        />

    </div >
}