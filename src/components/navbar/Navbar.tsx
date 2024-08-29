import { hero, imageUnderNav } from "./Navbar.css";
import spacemaker from "../../assets/spacemaker.jpg"

export default function Navbar() {
    return <div className={hero}>
        <img className={imageUnderNav} src={spacemaker} />
        <span>&#9888;</span>

    </div>
}