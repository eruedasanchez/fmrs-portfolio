import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { HeroProps } from "@/types/types";

const Hero = ({header, title, description} : HeroProps) => {
    return (
        <section className="flex items-center max-width flex-col-reverse tablet:flex-row mb-10">
            {/* left side */}
            <div className="mt-10 tablet:w-2/3 tablet:mt-0">
                <div className="flex flex-col gap-3 items-center tablet:items-start max-w-2xl text-center tablet:text-left">
                    <p className="px-4 py-2 bg-peach-500 text-gray-600 w-max rounded">{header}</p>
                    <h1 className="text-grey">{title}</h1>
                    <p className="text-grey-600">{description}</p>
                </div>
                <div className="flex gap-5 mt-10 justify-center tablet:justify-start">
                    <Link href={"/contact"} className="btn btn-primary">
                        <Phone/>Contact Now
                    </Link>
                    <Link href={"/contact"} className="btn">
                        View Portfolio
                        <ArrowRight size={16}/>
                    </Link>
                </div>
            </div>
            {/* right side */}
            <div className="relative w-full tablet:w-1/3 h-[400px] tablet:h-[700px] rounded-b-2xl overflow-hidden">
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