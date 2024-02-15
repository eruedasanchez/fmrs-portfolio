import { StatsProps } from "@/types/types";
import StatsDetail from "./StatsDetail";

const Stats = ({ containedStyles, statsDetailStyles, isPortfolio} : StatsProps) => {
    return (    
        <div className={containedStyles}>
            <StatsDetail
                quantity={10}
                title="Happy Customers"
                statsDetailStyles={statsDetailStyles}
                isPortfolio={isPortfolio}
            />
            <StatsDetail
                quantity={5}
                title="Countries Visited"
                statsDetailStyles={statsDetailStyles}
                isPortfolio={isPortfolio}
            />
            <StatsDetail
                quantity={5}
                title="Years of Experience"
                statsDetailStyles={statsDetailStyles}
                isPortfolio={isPortfolio}
            />
        </div>
    )
}

export default Stats;

