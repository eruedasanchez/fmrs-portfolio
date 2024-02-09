import SectionHeading from "./SectionHeading";
import Testimonials from "./Testimonials";

const TestimonialsContainer = () => {
    return (
        <section className="max-width section-padding">
            <SectionHeading
                title="What my clients say about me"
                subtitle="Discover what travelers have to say about their experiences with my tour guide services."
            />
            <Testimonials/>
        </section>
    );
}

export default TestimonialsContainer;