import Milestone from "./Milestone";
import SectionHeading from "./SectionHeading";

const MilestoneContainer = () => {
    return (
        <section className="max-width section-padding">
            <SectionHeading
                title="Milestone of my career"
                subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto suscipit fugiat ipsam, totam qui."
            />
            <Milestone/>
        </section>
    );
}

export default MilestoneContainer;