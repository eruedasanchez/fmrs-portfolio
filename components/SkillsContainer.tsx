import SectionHeading from "./SectionHeading";
import Skills from "./Skills";

const SkillsContainer = () => {
    return (
        <section className="max-width section-padding">
            <SectionHeading
                title="Creative Skills"
                subtitle="Discover unique destinations with a guide that sparks creativity and offers memorable experiences."
            />
            <Skills/>
        </section>
    );
}

export default SkillsContainer;