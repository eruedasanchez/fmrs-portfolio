import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { faqs } from "@/constants/constants";
import Accordion from "./Accordion";

const Faqs = () => {
    return (
        <div className="flex flex-col tablet:flex-row gap-5 items-start">
            <div className="box">
                <Accordion data={faqs}/>
            </div>
            <div className="box flex flex-col gap-5 tablet:max-w-md">
                <div className="w-16 h-16 bg-purple text-peach-100 flex items-center justify-center flex-shrink-0 mb-2">
                    <Star 
                        fill="currentColor"
                        size={30}
                    />
                </div>
                <div>
                    <h5 className="text-grey-700 mb-2">Still have any questions?</h5>
                    <p className="text-grey-600">Contact me to collaborate on finding answers and solutions together.</p>
                </div>
                <Link
                    href={"/contact"}
                    className="btn btn-primary w-max"
                >
                    Contact Me <ArrowRight/>
                </Link>
            </div>
        </div>
    )
}

export default Faqs;