import Benefits from "./Benefits";
import SectionHeading from "./SectionHeading";

const BenefitsContainer = () => {
    return (
        <section className="max-width section-padding">
            <SectionHeading
                title="Benifits"
                subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto suscipit fugiat ipsam, totam qui."
            />
            <Benefits/>
        </section>
    );
}

export default BenefitsContainer;