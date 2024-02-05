import Link from "next/link";
import Portfolio from "./Portfolio";
import SectionHeading from "./SectionHeading";

const PortfolioContainer = () => {
    return (
        <section className="max-width section-padding">
            <SectionHeading
                title="My works"
                subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto suscipit fugiat ipsam, totam qui."
            />
            <Portfolio/>
            <Link 
                href={"/portfolio"} 
                className="btn btn-primary mt-10 mx-auto w-max"
            >
                View All Projects
            </Link>
        </section>
    );
}

export default PortfolioContainer;