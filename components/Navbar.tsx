import Link from "next/link";
import NavLink from "./NavLink";
import { NavbarProps } from "@/types/types";
import { navLinks } from "@/constants/constants";
import { Phone } from "lucide-react";
import { Lora } from "next/font/google";

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
            <Link 
                href={"/contact"} 
                className="btn btn-primary
                hover:bg-peach-500 hover:text-brown-700 
                hover:border hover:border-brown-700
                hover:scale-105 transition-all duration-700"
            >
                <Phone size={24}/>
                Contact me
            </Link>
        </nav>
    )
}

export default Navbar;
