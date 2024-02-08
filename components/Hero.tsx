import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { HeroProps } from "@/types/types";
import Stats from "./Stats";
import '../app/styles/dream-avenue.css';
import '../app/styles/lora.css';

const Hero = ({header, title, description} : HeroProps) => {
    return (
        <section className="flex items-center max-width flex-col-reverse tablet:flex-row mb-10">
            {/* left side */}
            <div className="tablet:w-2/3 mt-10 tablet:mt-0">
                <div className="flex flex-col gap-3 items-center tablet:items-start max-w-2xl text-center tablet:text-left">
                    <p 
                        className="font-lora font-light px-4 py-2 bg-peach-500 text-gray-600 w-max rounded"
                        data-aos="fade-down"
                    >
                        {header}
                    </p>
                    <h1 className="text-grey font-dream-avenue text-5xl font-light" data-aos="fade-down" data-aos-delay="100">{title}</h1>
                    <p className="text-grey-600" data-aos="fade-down" data-aos-delay="200">{description}</p>
                </div>
                <div 
                    className="flex gap-5 mt-10 justify-center tablet:justify-start"
                    data-aos="fade-down" 
                    data-aos-delay="300"
                >
                    <Link href={"/contact"} className="btn btn-primary">
                        <Phone/>Contact Now
                    </Link>
                    <Link href={"/contact"} className="btn">
                        View Portfolio
                        <ArrowRight size={16}/>
                    </Link>
                </div>
                {/* stats */}
                <Stats
                    containedStyles="bg-peach-400 w-full py-8 px-10 
                    rounded-l-lg mt-16 flex-wrap gap-12 hidden tablet:flex"
                />
                <Stats 
                    containedStyles="mt-10 grid grid-cols-2 gap-3 tablet:hidden"
                    statsDetailStyles="py-8 px-10 rounded-lg bg-peach-400 text-center col-span-2"
                />
            </div>
            {/* right side */}
            <div 
                className="relative w-full tablet:w-1/3 h-[400px] tablet:h-[700px] rounded-b-2xl overflow-hidden"
                data-aos="fade-left"
                data-aos-delay="300"
            >
                <Image
                    src={"/hero.png"}
                    alt="hero"
                    fill
                    className="object-cover"
                />
            </div>
        </section>
    );
}

export default Hero;