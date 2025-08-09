import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Swiper as SwiperType} from 'swiper'
import '../../index.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { heroData } from '../../data/Hero';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Hero:React.FC =()=> {
    const swiperRef = useRef<SwiperType | null>(null)
    return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          waitForTransition:true,
          pauseOnMouseEnter:false,
        }}
        speed={600}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination,]}
        className="mySwiper"
        onSlideChange={() => {
            swiperRef.current?.autoplay?.start();
        }}
      >
        {heroData.map(card =>(
            <SwiperSlide key={card.id}>
                <div className="w-full h-full relative">
                    <div className="absolute w-full h-full top-0 left-0">
                        <img src={card.banner} alt="" />
                    </div>
                    <div className="w-full h-full relative flex flex-col items-start justify-center gap-2">
                        <div className="w-full lg:w-2/3 flex flex-col items-start justify-center gap-1 p-2 pl-8 lg:pl-20 text-start">
                            <h1 className="text-orangered text-2xl lg:text-7xl font-bold lg:font-['impact']">{card.title}</h1>
                            <div className="w-full">
                                {card.description.map((item, index) =>(
                                    <p key={index} className=' text-white font-extrabold text-sm lg:text-2xl'>{item}</p>
                                ))}
                            </div>
                            <div className="flex items-center justify-start gap-2">
                            {card.links.map((link) => (
                                <Link 
                                    key={link.id}
                                    to={link.path}
                                    className="bg-orangered text-white font-bold p-2 lg:p-4 px-4 lg:px-6 rounded-md flex items-center justify-between gap-2 transition-all duration-300 hover:bg-white/20 hover:text-orangered hover:border-[3px] border-orangered">
                                    {link.label}
                                    {link.icon && <FontAwesomeIcon icon={link.icon} />}
                                </Link>
                            ))}
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
export default Hero
