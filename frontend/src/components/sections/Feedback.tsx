import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import banner1 from '../../data/images/Feedbacks/banner1.jpg'
import banner2 from '../../data/images/Feedbacks/farmer.jpg'

import video from '../../data/videos/chickenfarm.mp4'

import FeedModal from "../modals/FeedModal";
import FeedCaroussel from "../caroussels/FeedCaroussel";

const Feedback:React.FC = () =>{
    const [showModal, setShowModal] = useState<boolean>(false)
    return(
        <>
        <div className=" flex lg:flex-row flex-col items-center justify-between gap-4 w-[95%] lg:h-[380px] mx-auto relative">
            <div className="banner w-full lg:w-[30%] h-[400px] lg:h-full relative flex items-center justify-center" data-aos="fade-up">
                <button
                onClick={() => setShowModal(true)} 
                className="w-32 h-32 rounded-full flex items-center justify-center z-10 text-white text-7xl border-[3px] border-white transition-all duration-300 hover:text-orangered hover:border-orangered ">
                    <FontAwesomeIcon icon={faPlay}/>
                </button>
                <div className="absolute w-full h-full top-0 left-0">
                    <img src={banner1} alt="" className="w-full h-full object-cover rounded-lg"/>
                </div>
                <div className="absolute w-full h-full top-0 left-0 bg-black rounded-lg opacity-70"> </div>
            </div>
            <div className="farmer h-full w-full lg:w-[70%]" data-aos="fade-down">
                <img src={banner2} alt="" className="w-full h-full object-cover object-top rounded-lg" />
            </div>


            {/* Video Modal */}
            
        </div>

        {/* video modal */}
        {showModal && <FeedModal videosrc={video} onClose={() =>setShowModal(false)}/>}
        

        {/* feeds */}
        <div className="flex lg:flex-row lg:mt-0 mt-10  flex-col items-center justify-between lg:gap-4 w-[95%] mx-auto relative gap-20">
            <div className="left w-full lg:w-[40%] flex flex-col items-start justify-center gap-0">
                <h1 className="text-3xl lg:mb-0 mb-4 lg:text-4xl text-black font-extrabold">Hear From Our Happy Customers</h1>
                <p className="text-2xl font-bold text-orangered">Dont just take our word for it</p>
                <p className="text-black text-lg text-start l">From Nairobi homes to premier restaurants, Kenyan families and chefs trust Kaura Chicken for quality they can taste. Here's what they have to say:</p>
                <div className="mt-4 w-full flex items-center justify-start gap-2">
                    <Link to="" className="bg-orangered font-bold hover:bg-yellow text-white hover:text-black p-3 px-5 rounded-md transition-all duration-300">Make an Order</Link>
                    <p>Join 1,000+ Satisfied Customers</p>
                </div>
            </div>
            <FeedCaroussel/>
        </div>
        </>
    )

}
export default Feedback
    