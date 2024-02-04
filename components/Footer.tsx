import Link from "next/link";
import NavLink from "./NavLink";
import { contactDetails, navLinks, socialLinks } from "@/constants/constants";

const Footer = () => {
    return (
        <footer className="py-10 border-t border-peach max-width">
            <div className="flex justify-between items-center">
                <Link 
                    href="/"
                    className="text-purple text-xl font-semibold"
                >
                    Flor RS.
                </Link>
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
                                className="w-10 h-10 bg-purple text-peach flex justify-center items-center rounded"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <link.icon strokeWidth={0} fill="currentColor"/>
                            </Link>

                        ))
                    }
                </div>
            </div>
            {/* contact details */}
            <div className="w-max border border-peach p-5 mx-auto flex gap-5 
            tablet:gap-10 flex-col tablet:flex-row items-center">
                {
                    contactDetails.map((detail, index) => (
                        <div key={index} className="flex gap-3 items-center text-purple">
                            <detail.icon size={20}/>
                            <p className="text-grey-600">{detail.text}</p>
                        </div>
                    ))
                }
            </div>
            {/* copyright text */}
            <p className="mt-8 text-gray-600 text-center text-sm">
                Copyright © {new Date().getFullYear()} Flor RS. All rights reseved
            </p>
        </footer>
    )
}

export default Footer;