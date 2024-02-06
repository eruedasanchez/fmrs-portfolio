import PortfolioSection from "@/components/PortfolioSection";
import PortfolioSite from "@/components/PortfolioSite";
import { portfolios } from "@/constants/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio | Flor RS"
};

const PortfolioPage = () => {
    return (
        <>
            <PortfolioSite/>
            <PortfolioSection
                data={portfolios}
                title="Projects Done in 2023"
            />
        </>
    )
}

export default PortfolioPage;