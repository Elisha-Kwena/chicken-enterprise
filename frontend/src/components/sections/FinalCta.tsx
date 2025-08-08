import React from "react";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


import banner from '../../data/videos/background.mp4'
import banner1 from '../../data/videos/background.webm'
import banner2 from '../../data/images/Gallery/fallback.jpg'

const FinalCta:React.FC =()=>{
    return(
        <>
         <div className="content-container w-full lg:h-[500px] relative">
            {/* Video Container */}
            <div className="video-container absolute top-0 left-0 w-full h-full -z-10">
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  className="w-full h-full object-cover"
                  poster={banner2}
                >
                  <source src={banner} type="video/mp4" />
                  <source src={banner1} type="video/webm" />
                </video>
                {/* Video overlay */}
                <div className="absolute inset-0 bg-black opacity-80"></div>
                </div>

    	        {/* Text Content - positioned on top */}
    	        <div className="cta-content relative z-10 w-full h-full flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 py-12 lg:py-0 text-white">
    	          {/* Left Content */}
    	          <div className="cta-left w-full lg:w-[70%] mb-8 lg:mb-0 " data-aos="fade-down">
    	            <div className="title mb-4 w-full lg:flex-row flex-col flex items-center justify-start gap-0 lg:gap-3 text-start">
    	              <h1 className="text-4xl text-red lg:text-6xl font-bold mb-2">KAURA CHICKEN</h1>
    	              <h1 className="text-4xl text-green lg:text-5xl font-bold">Enterprise</h1>
    	            </div>
    	            <p className="text-lg lg:text-xl max-w-2xl text-center">
    	              Our commitment begins at the very start of life—monitoring each bird from incubation to processing—ensuring quality at every stage. Recognized worldwide for innovation in supply chain visibility, we guarantee complete transparency from farm to fork.
    	            </p>
    	        </div>

                {/* Right Content - CTA Button */}
                <div className="cta-right " data-aos="fade-up">
                  <Link 
                    to="" 
                    className="flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-semibold text-lg px-8 py-4 rounded-lg transition-colors duration-300 bg-red hover:bg-transparent hover:text-orangered border-[3px] border-red hover:border"
                  >
                    Make an Order Now
                    <FontAwesomeIcon icon={faArrowRight} className="ml-2"/>
                  </Link>
                </div>
              </div>
            </div>
        </>
    )
}
export default FinalCta