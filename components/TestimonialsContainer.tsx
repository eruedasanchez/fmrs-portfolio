import SectionHeading from "./SectionHeading";
import Testimonials from "./Testimonials";

const TestimonialsContainer = () => {
    return (
        <section className="max-width section-padding">
            <SectionHeading
                title="What my clients say about me"
                subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto suscipit fugiat ipsam, totam qui."
            />
            <Testimonials/>
        </section>
    );
}

export default TestimonialsContainer;