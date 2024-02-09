import { StatsProps } from "@/types/types";
import StatsDetail from "./StatsDetail";

const Stats = ({ containedStyles, statsDetailStyles} : StatsProps) => {
    return (    
        <div className={containedStyles}>
            <StatsDetail
                quantity={10}
                title="Happy Customers"
                statsDetailStyles={statsDetailStyles}
            />
            <StatsDetail
                quantity={5}
                title="Countries Visited"
                statsDetailStyles={statsDetailStyles}
            />
            <StatsDetail
                quantity={5}
                title="Years of Experience"
                statsDetailStyles={statsDetailStyles}
            />
        </div>
    )
}

export default Stats;
