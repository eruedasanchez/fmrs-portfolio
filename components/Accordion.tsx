'use client';

import { AccordionProps } from "@/types/types";
import { Plus } from "lucide-react";
import { useState } from "react";

const Accordion = ({ data } : AccordionProps) => {
    const [currentActive, setCurrentActive] = useState<number | null>(0);
    
    return (
        <div className="flex flex-col gap-3">
            {
                data.map(item => (
                    <div key={item.id} className="bg-peach-600 px-5 rounded-lg">
                        <div
                            className="flex justify-between items-center cursor-pointer py-5"
                            onClick={() => setCurrentActive(item.id)}
                        >
                            <h6 className="text-grey-700">{item.question}</h6>
                            <div className={` transition-transform duration-300
                            ${currentActive === item.id && 'rotate-45'}
                            `}>
                                <Plus size={16}></Plus>
                            </div>
                        </div>
                        <div className={`text-grey-600 transition-all duration-300
                        ${currentActive === item.id ? 'max-h-[1000px] opacity-100 pb-5' : 'max-h-0 opacity-0'}
                        `}
                        >
                            <p>{item.answer}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Accordion;