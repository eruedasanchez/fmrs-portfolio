'use client';

import { useEffect, useRef, useState } from "react";
import { reviews } from "@/constants/constants";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper as SwiperType} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SingleReview from "./SingleReview";
import { useWindowSize } from "@/hooks/useWindowsSize";


const Testimonials = () => {
    const swiperRef = useRef<SwiperType>();
    const [sliderPerView, setSliderPerView] = useState(3);
    const {width} = useWindowSize();

    useEffect(() => {
        if(width < 768){
            setSliderPerView(1);
        } else if(width < 1268){
            setSliderPerView(2);
        } else {
            setSliderPerView(3);
        }
    }, [width]);
    

    return (
        <div>
            <div className="pb-3 border-b border-peach flex justify-between items-center">
                <p>{reviews.length} total reviews</p>
                <div className="flex gap-2">
                    <button 
                        className="bg-peach-200 border border-peach p-1 rounded text-grey-700"
                        onClick={() => swiperRef.current?.slidePrev()}
                    >
                        <ChevronLeft/>
                    </button>
                    <button 
                        className="bg-peach-200 border border-peach p-1 rounded text-grey-700"
                        onClick={() => swiperRef.current?.slideNext()}
                    >
                        <ChevronRight/>
                    </button>
                </div>
            </div>
            <div className="pt-8">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={sliderPerView}
                    loop={true}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                >
                    {
                        reviews.map((review, index) => (
                            <SwiperSlide key={index}>
                                <SingleReview review={review}/>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    );
}

export default Testimonials;