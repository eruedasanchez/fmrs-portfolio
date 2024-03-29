'use client';

import Link from "next/link";
import { NavbarProps } from "@/types/types";
import { navLinks } from "@/constants/constants";
import { Phone } from "lucide-react";
import { Lora } from "next/font/google";
import NavLink from "./NavLink";
import Theme from "./Theme";
import LanguageDropdownMenu from "./LanguageDropdownMenu";

const lora = Lora({ subsets: ["latin"] });

const Navbar = ({navStyles, ulStyles, showTheme, toogleMenu, showLanguageMenu} : NavbarProps) => {
    return (
        <nav className={`${lora.className} flex items-center ${navStyles}`}>
            <ul className={`flex items-center ${ulStyles}`}>
                {
                    navLinks.map((link, index) => (
                        <NavLink 
                            key={index}
                            href={link.url}
                            label={link.label}
                            toogleMenu={toogleMenu} 
                        />
                    ))
                }
            </ul>
            <div className="flex justify-center items-center gap-6">
                <Link 
                    href={"/contact"} 
                    className="btn btn-primary
                    hover:bg-peach-500 hover:text-brown-700 
                    hover:border hover:border-brown-700
                    hover:scale-105 transition-all duration-700
                    dark:bg-brown dark:hover:text-brown dark:hover:bg-peach-500"
                    onClick={toogleMenu}
                >
                    <Phone size={24}/>
                    Contact me
                </Link>
                {
                    showLanguageMenu &&
                    <LanguageDropdownMenu
                        containerStyles="border-brown-700 dark:border-brown"
                        iconStyles="text-brown-700 dark:text-brown
                        text-brown-700 dark:text-brown"
                    />
                }
                {
                    showTheme && 
                        <Theme
                            containerStyles="w-10 h-10 rounded-full flex justify-center items-center
                            border-2 border-brown-700 
                            hover:scale-105 transition-all duration-300 cursor-pointer
                            dark:border-brown"
                            iconStyles="text-brown-700 dark:text-brown"
                        />
                }
            </div>
        </nav>
    )
}

export default Navbar;
