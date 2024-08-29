import { useContext, useRef } from "react"
import { SolutionsContext } from "../../../../../store/Solutions";
import { FeatureCollection } from "../../../../../types";
import { buttonStyle, buttonStyleVariant } from "../../../Workspace.css";


export default function FileUpload() {
    const fileInputRef = useRef<HTMLInputElement>(null)
    const { addSolution } = useContext(SolutionsContext)

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
                        alert('Error parsing JSON:' + error);
                    }
                }
            };
            reader.readAsText(file);
        }
    };
    return (<div>
        <button className={`${buttonStyle} ${buttonStyleVariant.default}`} onClick={handleFileUploadButtonClick}>
            + Upload A Solution
        </button>
        <span>&#9888;</span>

        <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            accept=".json"
            onChange={handleFileChange}
        />
    </div>)
}
