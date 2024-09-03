import { useContext, useRef } from "react"
import { SolutionsContext } from "../../../../../store/Solutions";
import { buttonStyle, buttonStyleVariant } from "../../../Workspace.css";
import { validateSchema } from "../../../../../helpers/validate-schema";


export default function FileUpload() {
    const fileInputRef = useRef<HTMLInputElement>(null)
    const { addSolution, updateErrorMessage } = useContext(SolutionsContext)

    const handleFileUploadButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        updateErrorMessage("")
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const content = e.target?.result;
                if (typeof content === 'string') {
                    const response = validateSchema(content)
                    if (response.status === "success") {
                        addSolution(response.data);
                    } else if (response.status === "issue") {
                        updateErrorMessage(response.issueMessage)
                    } else {
                        updateErrorMessage(response.erroMessage)
                    }
                }
            };
            reader.readAsText(file);
        }
    };
    return (<div>
        <button
            className={`${buttonStyle} ${buttonStyleVariant.default}`}
            onClick={handleFileUploadButtonClick}>
            + Upload A Solution
        </button>
        <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            accept=".json"
            onChange={handleFileChange}
        />
    </div>)
}
