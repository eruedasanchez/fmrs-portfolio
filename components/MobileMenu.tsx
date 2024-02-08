'use client';

import { useState } from "react";
import Link from "next/link";
import Navbar from "./Navbar";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";
import { socialLinks } from "@/constants/constants";
import { Lora } from "next/font/google";

const lora = Lora({ subsets: ["latin"] });

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toogleMenu = () => {
        setIsOpen(!isOpen);
    }
    
    return (
        <div className="tablet:hidden">
            {/* toogle button */}
            <button 
                className="text-grey-700 hover:text-brown transition-colors"
                onClick={toogleMenu}
            >
                <Menu/>
            </button>
            {/* sidebar */}
            <div className={`border-4 w-full h-full flex flex-col bg-peach-600 
            fixed top-0 left-0 z-50 transition-all duration-300 ease-in-out transform
            ${isOpen ? 'trasnlate-x-0' : 'translate-x-full'}`}>
                <div className="flex w-full items-center justify-between h-21 max-width border-b border-brown">
                    <Logo/>
                    <button 
                        className="text-grey-700 hover:text-brown-700 transition-colors"
                        onClick={toogleMenu}
                    >
                        <X/>
                    </button>
                </div>
                <Navbar
                    navStyles="flex-col justify-center flex-1 gap-10"
                    ulStyles="flex-col gap-5"
                />
                <div className={`${lora.className} w-full h-20 flex justify-between items-center border-t border-brown px-7`}>
                    {
                        socialLinks.map((link) => (
                            <Link 
                                key={link.id} 
                                href={link.url}
                                className='text-grey-700 hover:text-brown transition-colors'
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