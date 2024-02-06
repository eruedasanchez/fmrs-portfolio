import { portfolios } from "@/constants/constants";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
    return (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))]
        tablet:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-3 tablet:gap-6">
            {
                portfolios.slice(0,3).map((portfolio, index) => (
                    <PortfolioItem
                        key={index}
                        portfolio={portfolio}
                    />
                ))
            }
        </div>    
    );
}

export default Portfolio;