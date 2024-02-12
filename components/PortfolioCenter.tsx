import Image from "next/image";
import { Lora } from "next/font/google";
import { PortfolioCenterProps } from "@/types/types";
import { ArrowUpRight } from "lucide-react";

const lora = Lora({ subsets: ["latin"] });

const PortfolioCenter = ({currentImg, portfolio} : PortfolioCenterProps) => {
    return (
        <>
            <h4 className={`${lora.className} text-2xl mb-5`}>{portfolio.title}</h4>
            <div className="relative w-full h-80 rounded-lg overflow-hidden 
            group cursor-pointer mb-5 ">
                <Image
                    src={currentImg}
                    alt={portfolio.title}
                    fill
                    className="object-cover"
                />
                <div className="bg-black bg-opacity-10 backdrop-blur-[1px]
                absolute top-0 left-0 w-full h-full opacity-0
                group-hover:opacity-100 transition-opacity duration-300
                flex items-center justify-center">
                    <div className="w-16 h-16 text-brown-700 rounded-lg
                    flex items-center justify-center
                    bg-peach border border-brown-700 p-3
                    hover:bg-brown-700 hover:text-peach hover:border hover:border-peach">
                        <ArrowUpRight/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PortfolioCenter;