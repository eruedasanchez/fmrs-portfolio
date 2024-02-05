import { benefits } from "@/constants/constants";
import { BenefitsListProps } from "@/types/types";

const BenefitsList = ({containedStyles, from, to} : BenefitsListProps) => {
    return (
        <div className={`grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))]
            tablet:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-3 tablet:gap-6 ${containedStyles}`}>
                {
                    benefits.slice(from,to).map((benefit, index) => (
                        <div key={index} className="box">
                            <h5 className="text-grey-700 mb-2">{benefit.name}</h5>
                            <p className="text-grey-600">{benefit.description}</p>
                        </div>
                    ))
                }
        </div>
    );
}

export default BenefitsList;
