import { card, cardBody, cardDivider, cardFooter, subHeading } from "./AreaCard.css"

export default function AreaCard(props: { area: { value: number } }) {
    const { area } = props
    return <div className={card}>
        <div className={cardBody}>
            <div className={subHeading}>{area.value.toFixed(3)}</div>
            <div>km(square)</div>
        </div>
        <hr className={cardDivider} />
        <div className={cardFooter}>Total Area</div>
    </div>

}