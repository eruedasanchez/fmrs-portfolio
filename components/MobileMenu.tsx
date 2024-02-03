'use client';

import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { navLinks, socialLinks } from "@/constants/constants";
import NavLink from "./NavLink";
import Navbar from "./Navbar";


const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toogleMenu = () => {
        setIsOpen(!isOpen);
    }
    
    
    return (
        <div className="tablet:hidden">
            {/* toogle button */}
            <button 
                className="text-grey-700 hover:text-purple transition-colors"
                onClick={toogleMenu}
            >
                <Menu/>
            </button>
            {/* sidebar */}
            <div className={`border-4 w-full h-full flex flex-col bg-peach-600 
            fixed top-0 left-0 z-50 transition-all duration-300 ease-in-out transform
            ${isOpen ? 'trasnlate-x-0' : 'translate-x-full'}`}>
                <div className="flex w-full items-center justify-between h-20 max-width border-b border-peach">
                    <Link href={"/"}>
                        <h5 className="text-purple">Flor RS</h5>
                    </Link>
                    <button 
                        className="text-grey-700 hover:text-purple transition-colors"
                        onClick={toogleMenu}
                    >
                        <X/>
                    </button>
                </div>
                <Navbar
                    navStyles="flex-col justify-center  flex-1 gap-10"
                    ulStyles="flex-col gap-5"
                />
                <div className="w-full h-20 flex justify-between items-center border-t border-peach">
                    {
                        socialLinks.map((link, index) => (
                            <Link 
                                key={link.id} 
                                href={link.url}
                                className="text-grey-700 hover:text-purple transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))
                    }

                </div>
            </div>
        </div>
    );
}

export default MobileMenu;