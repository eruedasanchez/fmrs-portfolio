import Link from "next/link";
import NavLink from "./NavLink";
import { navLinks } from "@/constants/constants";
import { Phone } from "lucide-react";

const Header = () => {
    return (
        <header className="flex justify-between items-center h-20 max-width border-b border-peach">
            <Link href={"/"}>
                <h5 className="text-purple">Flor RS</h5>
            </Link>
            <nav className="flex items-center gap-12">
                <ul className="flex items-center gap-8">
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
        </header>
    );
}

export default Header;