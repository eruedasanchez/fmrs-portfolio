'use client';

import Link from "next/link";
import NavLink from "./NavLink";
import { NavbarProps } from "@/types/types";
import { navLinks } from "@/constants/constants";
import { Phone } from "lucide-react";
import { Lora } from "next/font/google";
import Theme from "./Theme";

const lora = Lora({ subsets: ["latin"] });

const Navbar = ({navStyles, ulStyles} : NavbarProps) => {
    return (
        <nav className={`${lora.className} flex items-center ${navStyles}`}>
            <ul className={`flex items-center ${ulStyles}`}>
                {
                    navLinks.map((link, index) => (
                        <NavLink 
                            key={index}
                            href={link.url}
                            label={link.label} 
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
                >
                    <Phone size={24}/>
                    Contact me
                </Link>
                <Theme
                    containerStyles="w-10 h-10 rounded-full flex justify-center items-center
                    border-2 border-brown-700 
                    hover:scale-105 transition-all duration-300 cursor-pointer
                    display-
                    dark:border-brown"
                    iconStyles="text-brown-700 dark:text-brown"
                />
            </div>
        </nav>
    )
}

export default Navbar;
