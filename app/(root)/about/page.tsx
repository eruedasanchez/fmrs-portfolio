import MilestoneContainer from "@/components/MilestoneContainer";
import MilestoneHero from "@/components/MilestoneHero";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'About - Flor RS'
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

