import React from 'react';
import { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../index.css';
import {Swiper as SwiperType} from 'swiper'
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import FeedCard from "../../components/cards/FeedCard";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft,faArrowRight} from "@fortawesome/free-solid-svg-icons";
import banner3 from '../../data/images/Feedbacks/banner2.png'

import { feedbacks } from '../../data/Feedback';
const FeedCaroussel:React.FC = () =>{

    const swiperRef = useRef<SwiperType | null>(null)
    return(
        <>
        <div className="feeds w-full lg:w-[55%] lg:h-[550px] flex items-center justify-center relative " >
            <div className="feed-background w-full h-full bottom-0 left-0 absolute px-16 ">
                <img src={banner3} alt="" />
            </div>
            <div className="absolute lg:w-[100px] w-[50px] h-full left-0 z-10 bg-gradient-to-r from-white to-transparent"></div>
            <div className="absolute lg:w-[100px] w-[50px] h-full right-0 z-10 bg-gradient-to-l from-white to-transparent"></div>
            <div className="nav-buttons flex gap-2 absolute z-10 right-2 lg:top-14 -top-14">
                <button
                className='flex items-center justify-center bg-transparent text-2xl text-red w-12 h-12 rounded-full border-[3px] border-red transition-all duration-300 hover:bg-red hover:text-white'
                onClick={() => swiperRef.current?.slidePrev()}
                >
                    <FontAwesomeIcon icon={faArrowLeft}/>
                </button>
                <button
                className='flex items-center justify-center bg-transparent text-2xl text-red w-12 h-12 rounded-full border-[3px] border-red transition-all duration-300 hover:bg-red hover:text-white'
                onClick={() => swiperRef.current?.slideNext()}
                >
                    <FontAwesomeIcon icon={faArrowRight}/>
                </button>
            </div>
            <div className="feeds-box w-full">
                <Swiper
                    slidesPerView={1.5} // Default for mobile
                    spaceBetween={10}
                    loop={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        waitForTransition:false,
                        pauseOnMouseEnter:false,
                    }}
                    speed={1000}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={false}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                    
                    onSwiper = {(swiper) =>{
                        swiperRef.current = swiper
                    }}
                    onSlideChange={() => {
                        swiperRef.current?.autoplay?.start();
                    }}
                    >
                        {feedbacks.map(feed =>(
                            <SwiperSlide>
                                <FeedCard 
                                key={feed.id}
                                image={feed.image}
                                author={feed.author}
                                role={feed.role}
                                quote={feed.quote}
                                recency={feed.recency_label}
                                location={feed.location}
                                rating={feed.rating}
                                image_description={feed.image_description}

                                />
                            </SwiperSlide>
                            ))}
                </Swiper>
                
            </div>
        </div>
        
        </>
    )
}
export default FeedCaroussel;