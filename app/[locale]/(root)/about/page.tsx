import MilestoneContainer from "@/components/MilestoneContainer";
import MilestoneHero from "@/components/MilestoneHero";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'About | Florencia Rueda Sanchez'
};

const AboutPage = () => {
    return (
        <>
            <MilestoneHero/>
            <MilestoneContainer/>
        </>
    )
}

export default AboutPage;

