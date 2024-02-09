import Milestone from "./Milestone";
import SectionHeading from "./SectionHeading";

const MilestoneContainer = () => {
    return (
        <section className="max-width section-padding">
            <SectionHeading
                title="Milestone of my career"
                subtitle="Explore the highlights of my professional journey, showcasing significant achievements and enriching experiences."
            />
            <Milestone/>
        </section>
    );
}

export default MilestoneContainer;