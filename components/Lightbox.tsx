import { LightboxProps } from '@/types/types'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Lightbox = ({portfolio, currentImg, setCurrentImg, setIsOpen, handlePrevImage, handleNextImage} : LightboxProps) => {
    return (
        <div className="fixed inset-0 w-full h-full z-30 flex justify-center items-center
        bg-black bg-opacity-80 gap-5">
            <button 
                className="w-10 h-10 flex justify-center items-center absolute top-5 right-5  
                bg-peach border border-brown-700 p-1 rounded-full text-brown-700 transition-colors
                hover:bg-brown-700 hover:text-peach hover:border hover:border-peach"
                onClick={() => setIsOpen(false)}
            >
                <X/>
            </button>
            <button 
                className="bg-peach border border-brown-700 p-1 rounded-full text-brown-700
                hover:bg-brown-700 hover:text-peach hover:border hover:border-peach"
                onClick={() => handlePrevImage(portfolio, currentImg, setCurrentImg)}
            >
                <ChevronLeft/>
            </button>
                {
                    <Image
                        src={currentImg}
                        alt={portfolio.title}
                        // layout="fill"
                        // objectPosition="center"
                        width={500}
                        height={500}
                        className="rounded-2xl"
                        // className="object-cover"
                    />
                }
            <button 
                className="bg-peach border border-brown-700 p-1 rounded-full text-brown-700
                hover:bg-brown-700 hover:text-peach hover:border hover:border-peach"
                onClick={() => handleNextImage(portfolio, currentImg, setCurrentImg)}
            >
                <ChevronRight/>
            </button>
        </div>
    )
}

export default Lightbox