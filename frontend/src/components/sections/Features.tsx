import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import banner1 from '../../data/images/Features/banner1.png'
import banner2 from '../../data/images/Features/banner2.jpg'
import { features } from "../../data/Features";
const Feature:React.FC = () =>{
    return(
        <>
        <div className="flex items-center justify-between w-[95%] h-[180px] lg:h-[400px] mx-auto bg-[linear-gradient(to_right,#caa37a,#caa37a,#f9eaca)] rounded-xl" data-aos="fade-up">
            <div className="w-[70%] px-8">
            <h1 className="text-red font-extrabold uppercase lg:text-4xl text-start">At the heart of Kaura Chickens</h1>
            <p className="text-white lg:text-xl text-start">Quality poultry begins with respect for the animals, the land, and the families.</p>
            <p className="text-start text-white lg:text-xl  lg:block hidden">While others cut corners, we commit to time-tested farming traditions combined with modern hygiene standards. This is how we’ve earned the trust of Kenyan households since 2019.</p>
            </div>
            <div className="w-1/2 flex items-center justify-end">
                <img src={banner1} alt="" />
            </div>
        </div>
        <div className="w-[95%] mx-auto overflow-hidden">
            <h1 className="font-extrabold my-10 text-orangered text-3xl lg:text-5xl text-start" data-aos="fade-up">Why Kaura Chickens are Worth it..</h1>
            <div className="w-full py-4 flex flex-col-reverse lg:flex-row items-center justify-between gap-4 lg:h-[calc(100vh-65px)]">
                <div className="banner-side w-full lg:w-[590px] h-[400px] lg:h-full overflow-hidden" data-aos="fade-right">
                    <img src={banner2} alt="" className="w-full h-full object-bottom lg:object-center object-cover rounded-lg"/>
                </div>
                <div className="features w-full lg:w-[calc(100%-590px)] flex flex-col items-end justify-end gap-4">
                {features.map(feature =>(
                        <div key={feature.id} className={`featurebox flex items-center justify-start gap-3 ${feature.width}`} data-aos="fade-left">
                            <div className="feature-banner w-[100px] h-[100px] rounded-full">
                                <img src={feature.image} alt={feature.image_description} className="w-full h-full object-cover rounded-full"/>
                            </div>
                            <div className="feature-description w-[calc(100%-100px)]">
                                <h1 className="text-lg lg:text-2xl font-extrabold text-start">{feature.title}</h1>
                                <p className="text-start text-sm lg:text-md">{feature.description}.</p>
                            </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
        <div className="w-[95%] mx-auto flex flex-col gap-0 mt-10">
            <p className="text-left text-sm lg:text-xl" data-aos="fade-up">100% Satisfaction Guarantee: if you don't taste the difference in your first order, we'll refund your payment, no questions asked.</p>
            <p className="text-left mb-4 text-xl lg:text-2xl" data-aos="fade-up">Ready to experience the Kaura difference?</p>
            <div className=" flex items-center justify-start gap-3"data-aos="fade-up">
                <Link to="" className="flex items-center flex-row justify-center text-[10px] lg:text-lg gap-2 bg-orangered text-white font-bold p-3 px-8 rounded-md">
                    🛒 Order Now
                </Link>
                <a href="tel:+257xxxxxxxxx" className="flex text-[12px] lg:text-lg items-center justify-center gap-2 bg-green text-white font-bold p-3 px-8 rounded-md">
                    <FontAwesomeIcon icon={faPhone}/>
                    Call 07XX XXX XXX
                </a>
            </div>
        </div>
        </>
    )
}
export default Feature;