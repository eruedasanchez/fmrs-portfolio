import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { HeroProps } from "@/types/types";
import { Lora } from "next/font/google";
import Stats from "./Stats";
import '../app/styles/dream-avenue.css';
import '../app/styles/lora.css';

const lora = Lora({ subsets: ["latin"] });

const Hero = ({header, title, description} : HeroProps) => {
    return (
        <section className="flex items-center max-width flex-col-reverse tablet:flex-row mb-10">
            <div className="tablet:w-2/3 mt-10 tablet:mt-0">
                <div className="flex flex-col gap-3 items-center tablet:items-start 
                max-w-2xl text-center tablet:text-left">
                    <p className="font-lora font-light px-4 py-2 bg-peach-500 
                    text-gray-600 w-max rounded slider-reveal section-subtitle slider-reveal delay-250ms">
                        {header}
                    </p>
                    <h1 className="text-grey font-dream-avenue text-5xl font-light 
                    tracking-wide slider-reveal hero-title slider-reveal delay-500ms">{title}</h1>
                    <p className={`${lora.className} pr-2 text-grey-600 slider-reveal hero-text slider-reveal delay-750ms`}>{description}</p>
                </div>
                <div className={`${lora.className} flex gap-5 mt-10 justify-center tablet:justify-start slider-reveal delay-1000ms`}>
                    <Link 
                        href={"/contact"} 
                        className="btn btn-primary 
                        hover:bg-peach-500 hover:text-brown-700 hover:border hover:border-brown-700 
                        hover:scale-100 transition-all duration-600">
                        <Phone size={18}/>Contact Now
                    </Link>
                    <Link href={"/portfolio"} className="btn hover:scale-110 transition-all duration-400">
                        View Portfolio
                        <ArrowRight size={16}/>
                    </Link>
                </div>
                <Stats
                    containedStyles={`${lora.className} bg-peach-400 w-full py-8 px-10 
                    rounded-l-lg mt-16 flex-wrap gap-12 hidden tablet:flex`}
                />
                <Stats 
                    containedStyles={`${lora.className} mt-10 grid grid-cols-2 gap-3 tablet:hidden`}
                    statsDetailStyles="py-8 px-10 rounded-lg bg-peach-400 text-center col-span-2"
                />
            </div>
            <div className="relative my-2 w-full mobile:w-11/12 tabletS:w-8/12 tabletM:w-7/12 tablet:w-8/12 desktopM:w-6/12 
            h-[400px] mobile:h-[500px] tabletS:h-[400px] tabletM:h-[550px] tabletL:h-[600px] tablet:h-[700px] rounded-2xl overflow-hidden">
                <Image
                    src={"/hero-1.jpg"}
                    alt="hero"
                    layout="fill"
                    objectPosition="center"
                    className="rounded-2xl"
                />
            </div>
        </section>
    );
}

export default Hero;