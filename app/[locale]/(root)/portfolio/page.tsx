import PortfolioSection from "@/components/PortfolioSection";
import PortfolioSite from "@/components/PortfolioSite";
import { portfolios } from "@/constants/constants";
import { Metadata } from "next";

export const metadata : Metadata = {
    title: "Portfolio | Florencia Rueda Sanchez"
};

const PortfolioPage = () => {
    return (
        <>
            <PortfolioSite/>
            <PortfolioSection
                data={portfolios}
                title="Guided destinations in my career"
            />
        </>
    )
}

export default PortfolioPage;