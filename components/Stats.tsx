import { StatsProps } from "@/types/types";
import StatsDetail from "./StatsDetail";

const Stats = ({ containedStyles, statsDetailStyles} : StatsProps) => {
    return (    
        <div className={containedStyles}>
            <StatsDetail
                quantity={10}
                title="Projects Complete"
                statsDetailStyles={statsDetailStyles}
            />
            <StatsDetail
                quantity={20}
                title="Happy Customers"
                statsDetailStyles={statsDetailStyles}
            />
            <StatsDetail
                quantity={4}
                title="Years of Experience"
                statsDetailStyles={statsDetailStyles}
            />
        </div>
    )
}

export default Stats;
