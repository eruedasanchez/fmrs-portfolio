import Hero from "@/components/Hero";
import SkillsContainer from "@/components/SkillsContainer";

const HomePage = () => {
    return (
        <>
            <Hero
                header="Hello There!"
                title="Flor RS welcome&apos;s you"
                description="As a tour guide, I go beyond pointing out attractions, 
                inviting travelers to discover authentic experiences. 
                My portfolio reflects a passion for immersing visitors in cultural richness. 
                It tells unique stories, offering a gateway to adventure with curated details, 
                culinary recommendations, and memorable local experiences, creating lasting memories."
            />
            <SkillsContainer/>
        </>
    );
}

export default  HomePage;