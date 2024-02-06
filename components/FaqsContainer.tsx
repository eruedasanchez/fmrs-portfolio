import Faqs from "./Faqs";
import SectionHeading from "./SectionHeading";

const FaqsContainer = () => {
    return (
        <section className="max-width section-padding overflow-hidden">
            <SectionHeading
                title="Frequently Asked Questions"
                subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto suscipit fugiat ipsam, totam qui."
            />
            <Faqs/>
        </section>
    );
}

export default FaqsContainer;