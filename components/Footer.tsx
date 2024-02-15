import Link from "next/link";
import NavLink from "./NavLink";
import Logo from "./Logo";
import { Lora } from "next/font/google";
import { contactDetails, navLinks, socialLinks } from "@/constants/constants";

const lora = Lora({ subsets: ["latin"] });

const Footer = () => {
    return (
        <footer className={`${lora.className} py-10 border-t border-brown-700 max-width`}>
            <div className="flex justify-between items-center">
                <Logo/>
                <nav className="flex gap-12 max-tablet:hidden">
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
                </nav>
                <div className="flex gap-3">
                    {
                        socialLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.url}
                                className="w-10 h-10 bg-peach border border-brown-700 text-brown-700 rounded-full flex justify-center items-center
                                hover:bg-brown-700 hover:border hover:border-peach hover:text-peach
                                transition-all duration-300"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <link.icon size={19} strokeWidth={0} fill="currentColor" />
                            </Link>

                        ))
                    }
                </div>
            </div>
            {/* contact details */}
            <div className="w-max p-5 mx-auto flex gap-5 
            tablet:gap-10 flex-col tablet:flex-row items-center">
                {
                    contactDetails.map((detail, index) => (
                        <div key={index} className="flex gap-3 items-center text-brown-700">
                            <detail.icon size={20}/>
                            <p className="text-grey-600 dark:text-peach-500 text-base">{detail.text}</p>
                        </div>
                    ))
                }
            </div>
            {/* copyright text */}
            <p className="mt-8 text-gray-600 dark:text-peach-500 text-center text-sm">
                Copyright © {new Date().getFullYear()} Florencia Rueda Sanchez. All rights reseved
            </p>
        </footer>
    )
}

export default Footer;