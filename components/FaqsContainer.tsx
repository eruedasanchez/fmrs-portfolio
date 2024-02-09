import Faqs from "./Faqs";
import SectionHeading from "./SectionHeading";

const FaqsContainer = () => {
    return (
        <section className="max-width section-padding overflow-hidden">
            <SectionHeading
                title="Frequently Asked Questions"
                subtitle="Find answers to common inquiries about travel arrangements, tour details, and destination recommendations."
            />
            <Faqs/>
        </section>
    );
}

export default FaqsContainer;