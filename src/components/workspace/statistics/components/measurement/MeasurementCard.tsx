import { useContext } from "react"
import { card, cardBody, cardDivider, cardFooter, subHeading } from "./Measurement.css"
import { SolutionsContext } from "../../../../../store/Solutions"

export default function Measurement(props: { value: number, proposedSolution: number, name: string }) {
    const { value, proposedSolution, name } = props
    const { selectedSolIndx } = useContext(SolutionsContext)
    return <div className={card}>
        <div className={cardBody}>
            <div className={subHeading}>{
                selectedSolIndx === proposedSolution
                    ? value.toFixed(3)
                    : 0
            }
            </div>
            <div>km(square)</div>
        </div>
        <hr className={cardDivider} />
        <div className={cardFooter}>Total {name}</div>
    </div>

}