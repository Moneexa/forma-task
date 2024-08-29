import { hero, imageUnderNav } from "./Navbar.css";
import spacemaker from "../../assets/spacemaker.jpg"
import { useContext } from "react";
import { SolutionsContext } from "../../store/Solutions";

export default function Navbar() {
    const { errorMessage } = useContext(SolutionsContext)
    return <div className={hero}>
        <img className={imageUnderNav} src={spacemaker} />
        {
            errorMessage && <span>&#9888;{errorMessage}</span>

        }

    </div>
}