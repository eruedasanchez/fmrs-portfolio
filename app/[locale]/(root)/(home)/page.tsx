import BenefitsContainer from "@/components/BenefitsContainer";
import FaqsContainer from "@/components/FaqsContainer";
import Hero from "@/components/Hero";
import PortfolioContainer from "@/components/PortfolioContainer";
import SkillsContainer from "@/components/SkillsContainer";
import TestimonialsContainer from "@/components/TestimonialsContainer";

const HomePage = () => {
    return (
        <>
            <Hero
                header="Hello There!"
                title="Florencia welcome&apos;s you"
                description="As a tour guide, I go beyond pointing out attractions, 
                inviting travelers to discover authentic experiences. 
                My portfolio reflects a passion for immersing visitors in cultural richness. 
                It tells unique stories, offering a gateway to adventure with curated details, 
                culinary recommendations, and memorable local experiences, creating lasting memories."
            />
            <SkillsContainer/>
            <BenefitsContainer/>
            <PortfolioContainer/>
            <TestimonialsContainer/>
            <FaqsContainer/>
        </>
    );
}

export default  HomePage;