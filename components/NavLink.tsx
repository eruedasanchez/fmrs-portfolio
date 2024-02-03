'use client'; 

import Link from "next/link";
import { NavLinksProps } from "@/types/types";
import { usePathname } from "next/navigation";

const NavLink = ({index, href, label, containedStyles} : NavLinksProps) => {
    const pathname = usePathname();
    const isActive = pathname.startsWith(href);
    
    return (
        <li key={index}> 
            <Link 
                href={href} 
                className={
                    `py-3 text-gray-700 
                    hover:text-purple transition-colors relative block
                    after:block after:absolute after:left-0 after:h-0.5
                    after:bg-purple after:w-full after:scale-x-0
                    after:hover:scale-x-100 after:transition 
                    after:duration-300 after:origin-right after:hover:origin-left  
                    ${containedStyles}
                    ${
                        isActive ? 
                        'after:scale-x-100 after:origin-right' : 
                        'after:scale-x-0 after:origin-left'
                    }`
                }
            >
                {label}
            </Link>
        </li>
    )
}

export default NavLink;


// 
// 
