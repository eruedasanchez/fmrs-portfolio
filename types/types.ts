import { LucideIcon } from "lucide-react";
import React from "react";

export interface NavLinksProps{
    index?: number,
    href: string,
    label: string,
    containedStyles?: string
}

export interface NavbarProps{
    navStyles: string, 
    ulStyles: string
}  

export interface HeroProps{
    header: string, 
    title: string,
    description: string
} 

export interface SectionHeadingProps{
    title: string,
    subtitle: string
}

export interface BenefitsListProps{
    containedStyles?: string,
    from: number,
    to: number
}

export interface Portfolio{
    id: number,
    title:  string,
    link: string,
    images: string[]
}

export interface PortfolioProps{
    key: number,
    portfolio: Portfolio
}

export interface PortfolioCenterProps{
    currentImg: string, 
    portfolio: Portfolio
}

export interface PortfolioThumbnailsProps extends PortfolioCenterProps{
    setCurrentImg: React.Dispatch<React.SetStateAction<string>>
}

export interface SocialLink{
    id: number,
    icon: LucideIcon,
    url: string
}

export interface Review{
    id: number,
    name: string,
    designation: string,
    review: string,
    stars: number,
    socialLinks: SocialLink[]
}

export interface SingleReviewProps{
    review: Review
}

export interface AccordionData{
    id: number,
    question: string,
    answer: string
}

export interface AccordionProps{
    data: AccordionData[] 
}

export interface StatsProps{
    containedStyles: string, 
    statsDetailStyles?: string, 
}

export interface StatsDetailProps{
    quantity: number,
    title: string,
    statsDetailStyles?: string 
}














