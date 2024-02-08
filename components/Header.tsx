import Link from "next/link";
import NavLink from "./NavLink";
import MobileMenu from "./MobileMenu";
import { navLinks } from "@/constants/constants";
import { Phone } from "lucide-react";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <header className="flex justify-between items-center h-20 max-width border-b border-brown">
            <Link href={"/"}>
                <h5 className="text-darkBrown">Flor RS</h5>
            </Link>
            <Navbar
                navStyles="gap-12 max-tablet:hidden"
                ulStyles="gap-8"
            />
            <MobileMenu/>
        </header>
    );
}

export default Header;