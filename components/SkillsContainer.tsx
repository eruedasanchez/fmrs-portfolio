import SectionHeading from "./SectionHeading";
import Skills from "./Skills";

const SkillsContainer = () => {
    return (
        <section className="max-width section-padding">
            <SectionHeading
                title="Creative Skills"
                subtitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae numquam, aspernatur modi animi dolor."
            />
            <Skills/>
        </section>
    );
}

export default SkillsContainer;