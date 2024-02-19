// 'use client';

// import dynamic from "next/dynamic";
import MobileMenu from "./MobileMenu";
import Navbar from "./Navbar";
import Logo from "./Logo";

const Header = () => {
    return (
        <header className="flex justify-between items-center h-21 max-width border-b border-brown">
            <Logo/>
            <Navbar
                navStyles="gap-12 max-tablet:hidden"
                ulStyles="gap-8"
                showTheme
                showLanguageMenu
            />
            <MobileMenu/>
        </header>
    );
}

export default Header;
