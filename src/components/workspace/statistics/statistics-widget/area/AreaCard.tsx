import { useContext } from "react"
import { card, cardBody, cardDivider, cardFooter, subHeading } from "./AreaCard.css"
import { SolutionsContext } from "../../../../../store/Solutions"

export default function AreaCard(props: { area: { value: number, proposedSolution: number } }) {
    const { area } = props
    const { selectedSolIndx } = useContext(SolutionsContext)
    return <div className={card}>
        <div className={cardBody}>
            <div className={subHeading}>{selectedSolIndx == area.proposedSolution ? area.value.toFixed(3) : 0}</div>
            <div>km(square)</div>
        </div>
        <hr className={cardDivider} />
        <div className={cardFooter}>Total Area</div>
    </div>

}