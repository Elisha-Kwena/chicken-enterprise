import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import banner1 from '../../data/images/Gallery/left1.jpg'
import banner2 from '../../data/images/Gallery/left2.jpg'
import banner3 from '../../data/images/Gallery/left3.jpg'
import banner4 from '../../data/images/Gallery/right1.jpg'
import banner5 from '../../data/images/Gallery/right2.jpg'
import banner6 from '../../data/images/Gallery/right3.jpg'


const Gallery:React.FC =()=>{
    return(
        <>
        <div className="w-[95%] mx-auto lg:mt-0 mt-4 py-10 lg:py-0 h-full flex flex-col items-start justify-start gap-3">
            <h1 className="text-start text-3xl lg:text-5xl text-red font-extrabold mb-1" data-aos="fade-up">All of Kaura Chicken Enterprice in One</h1>
            <p className="text-start text-blck text-xl" data-aos="fade-up">Take a random View of stunning activities taking place in Kaura Chicken Farm</p>
            <div className="w-full py-2 lg:h-[calc(100vh-65px)] flex items-center justify-between gap-3">

                {/* Gallery left */}
                <div className="w-1/2 h-full flex flex-col gap-3">
                    <div className="w-full h-[40%] flex items-center justify-between gap-2">
                        <div className="w-1/2 h-full" data-aos="fade-up">
                            <img src={banner1} alt="" className="w-full h-full object-cover rounded-lg" />
                        </div>
                        <div className="w-1/2 h-full" data-aos="fade-down">
                            <img src={banner2} alt="" className="w-full h-full object-cover rounded-lg" />
                        </div>
                    </div>
                    <div className="w-full h-[60%]" data-aos="fade-up">
                        <img src={banner3} alt="" className="w-full h-full object-cover rounded-lg" />
                    </div>
                </div>

                {/* gallery-right */}
                <div className="w-1/2 h-full flex flex-col gap-3" data-aos="fade-down">
                    <div className="w-full h-[60%]">
                        <img src={banner4} alt="" className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <div className="w-full h-[40%] flex items-center justify-between gap-2">
                        <div className="w-1/2 h-full" data-aos="fade-up">
                            <img src={banner5} alt="" className="w-full h-full object-cover rounded-lg" />
                        </div>
                        <div className="w-1/2 h-full" data-aos="fade-down">
                            <img src={banner6} alt="" className="w-full h-full object-cover rounded-lg" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full mt-5 flex items-center judtify-start">
                <Link to="" className="flex items-center justify-center gap-2 p-3 px-10 rounded-md font-bold text-white text-md lg:text-xl bg-red transition-all duration-300 border-red border-[3px] group hover:bg-transparent hover:text-red" data-aos="fade-up">
                View More in Our Gallery
                <FontAwesomeIcon icon={faArrowRight} className="text-xl lg:text-3xl group-hover:text-red"/>
                </Link>
            </div>
        </div>
        </>
    )
}
export default Gallery




