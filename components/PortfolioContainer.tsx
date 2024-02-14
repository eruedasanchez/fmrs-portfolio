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
                className={`${lora.className} btn btn-primary mt-10 mx-auto w-max 
                hover:bg-peach-500 hover:text-brown-700 hover:border hover:border-brown-700
                hover:scale-105 transition-all duration-700`}
            >
                View My Portfolio
            </Link>
        </section>
    );
}

export default PortfolioContainer;