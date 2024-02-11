import { StatsDetailProps } from "@/types/types";

const StatsDetail = ({quantity, title, statsDetailStyles} : StatsDetailProps) => {
    return (
        <div className={statsDetailStyles}>
            <h3 className="text-grey-700 slider-in-left delay-250ms">
                {quantity} <span className="text-brown-700 slider-in-left delay-500ms">+</span>
            </h3>
            <p className="text-grey-600 slider-reveal delay-750ms">{title}</p>
        </div>
    )
}

export default StatsDetail;

