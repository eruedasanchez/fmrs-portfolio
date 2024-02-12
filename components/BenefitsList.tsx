import { benefits } from "@/constants/constants";
import { BenefitsListProps } from "@/types/types";
import { Lora } from "next/font/google";

const lora = Lora({ subsets: ["latin"] });

const BenefitsList = ({containedStyles, from, to} : BenefitsListProps) => {
    return (
        <div className={`grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))]
            tablet:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-3 tablet:gap-6 ${containedStyles}`}>
                {
                    benefits.slice(from,to).map((benefit, index) => (
                        <div key={index} className="box hover:scale-95">
                            <h5 className={`${lora.className} text-2xl text-grey-700 mb-2`}>{benefit.name}</h5>
                            <p className={`${lora.className} text-base text-grey-600 hover:scale-105`}>{benefit.description}</p>
                        </div>
                    ))
                }
        </div>
    );
}

export default BenefitsList;
