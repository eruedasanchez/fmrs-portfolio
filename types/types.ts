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