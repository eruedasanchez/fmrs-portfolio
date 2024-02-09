import { StatsDetailProps } from "@/types/types";

const StatsDetail = ({quantity, title, statsDetailStyles} : StatsDetailProps) => {
    return (
        <div className={statsDetailStyles}>
            <h3 className="text-grey-700">
                {quantity} <span className="text-brown-700">+</span>
            </h3>
            <p className="text-grey-600">{title}</p>
        </div>
    )
}

export default StatsDetail;

