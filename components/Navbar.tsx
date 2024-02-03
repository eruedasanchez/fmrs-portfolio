import Link from "next/link";
import NavLink from "./NavLink";
import { NavbarProps } from "@/types/types";
import { navLinks } from "@/constants/constants";
import { Phone } from "lucide-react";


const Navbar = ({navStyles, ulStyles} : NavbarProps) => {
    return (
        <nav className={`flex items-center ${navStyles}`}>
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
                className="btn btn-primary"
            >
                <Phone size={24}/>
                Contact me
            </Link>
        </nav>
    )
}

export default Navbar;