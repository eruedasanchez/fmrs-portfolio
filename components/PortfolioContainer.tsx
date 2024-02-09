import Link from "next/link";
import Portfolio from "./Portfolio";
import SectionHeading from "./SectionHeading";
import { Lora } from "next/font/google";

const lora = Lora({ subsets: ["latin"] });

const PortfolioContainer = () => {
    return (
        <section className="max-width section-padding">
            <SectionHeading
                title="My works"
                subtitle="Explore my journey and discover the destinations I've helped explore and enjoy."
            />
            <Portfolio/>
            <Link 
                href={"/portfolio"} 
                className={`${lora.className} btn btn-primary mt-10 mx-auto w-max`}
            >
                View My Portfolio
            </Link>
        </section>
    );
}

export default PortfolioContainer;