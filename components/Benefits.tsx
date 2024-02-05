import { benefits } from "@/constants/constants";
import BenefitsList from "./BenefitsList";

const Benefits = () => {
    return (
        <>
            <BenefitsList
                containedStyles="mb-3 tablet:mb-6"
                from={0} 
                to={2} 
            />
            <BenefitsList 
                from={0}
                to={4}
            />
        </>
    );
}

export default Benefits;