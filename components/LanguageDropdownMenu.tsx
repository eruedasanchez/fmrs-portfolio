import { languages } from "@/constants/constants";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Lora } from "next/font/google";
import { LanguageDropdownMenuProps } from "@/types/types";

interface LanguageData {
    title: string,
    flag: string
}

const lora = Lora({ subsets: ["latin"] });

const LanguageDropdownMenu = ({containerStyles, iconStyles} : LanguageDropdownMenuProps) => {
    const [currentLanguageFlag, setCurrentLanguageFlag] = useState(languages[0].flag);
    const [isOpen, setIsOpen] = useState(false);

    const handleChangeLanguage = (language: LanguageData): void => {
        setIsOpen(isOpen => !isOpen);
        setCurrentLanguageFlag(language.flag);
    }
    
    return (
        <div className={`${lora.className} ${containerStyles} border-2 relative rounded-xl p-2 transition-all duration-700 
        hover:scale-105 cursor-pointer ${isOpen ? 'w-[150px] translate-y-6 mt-3 mb-8' : 'w-[75px]'}`}> 
            <div 
                className='w-full rounded-xl flex justify-between items-center cursor-pointer'
                onClick={() => setIsOpen(!isOpen)}
            >
                <Image
                    src={currentLanguageFlag}
                    alt="current-language-flag"
                    width={26}
                    height={26}
                />
                {
                    !isOpen ? 
                    <ChevronDown className={`w-4 ${iconStyles}`}/> : 
                    <ChevronUp className={`w-4 ${iconStyles}`}/>
                }
            </div>
            <div className={`text-grey-600 transition-all duration-1000 
            ${isOpen ? 'max-h-[155px] opacity-100 p-1 my-2' : 'max-h-0 opacity-0'}`}
            >
                {
                    languages.map((language, index) => (
                        <div 
                            key={index} 
                            className="flex w-full h-1/2 justify-between px-1 py-1 mb-2
                            cursor-pointer border-l-transparent border-l-2
                            hover:border-l-brown-700 hover:transition-all hover:duration-700"
                            onClick={() => handleChangeLanguage(language)}
                        >
                            <h3 className="text-sm font-light text-gray-700 dark:text-peach-500 ">{language.title}</h3>
                            <Image
                                src={language.flag}
                                alt={language.title}
                                width={20}
                                height={20}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default LanguageDropdownMenu;