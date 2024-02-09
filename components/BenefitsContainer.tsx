import Benefits from "./Benefits";
import SectionHeading from "./SectionHeading";

const BenefitsContainer = () => {
    return (
        <section className="max-width section-padding">
            <SectionHeading
                title="Benifits"
                subtitle="Tapping into the expertise of a tour guide unlocks enriched experiences, hidden gems, and seamless adventures."
            />
            <Benefits/>
        </section>
    );
}

export default BenefitsContainer;