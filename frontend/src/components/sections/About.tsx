import React from "react";
import { Link } from "react-router-dom";
import banner from '../../data/images/section_images/hatching.jpg'

const About:React.FC = () =>{
    return(
        <>
        <div className="w-full ">
            <div className="about-contents w-[95%] h-full mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-4">
                <div className="left w-full lg:w-1/2 flex flex-col gap-0 items-start justify-center">
                    <h1 className="text-orangered font-Roboto font-extrabold text-3xl lg:text-7xl text-start mb-4" data-aos="fade-up" data-aos-delay="200">Ethically Raised, Exceptionally Tasty</h1>
                    <p className="text-start text-lg" data-aos="fade-up" data-aos-delay="200">At <span className="font-extrabold">Kaura Chicken Enterprise</span>, we believe the best chicken starts with <span className="font-extrabold">happy, healthy birds</span>. Our free-range chickens are raised naturally—no shortcuts, no additives—just pure, farm-fresh goodness</p>
                    <p className="text-start text-lg mt-4" data-aos="fade-up" data-aos-delay="200">Every egg and chicken from our farm is handled with care, ensuring you get flavorful, nutritious poultry for your family or business. We’re proud to offer :</p>
                    <ul className="mt-3 flex flex-col gap-1 items-start justify-start pl-6 list-disc" data-aos="fade-up" data-aos-delay="200">
                        <li>Plump, antibiotic-free live chickens</li>
                        <li>Farm-fresh eggs, collected daily</li>
                        <li>Hygienically processed meat, ready to cook</li>
                    </ul>
                    <p className="mt-3 font-bold text-xl" data-aos="fade-up" data-aos-delay="200">Want to meet the farmers behind your food?</p>
                    <Link to="" className="text-white bg-orangered font-bold lg:p-4 p-3 px-8 mt-4 rounded-md transition-all duration-300 hover:bg-white/20 hover:border-[2px] border-orangered hover:text-orangered" data-aos="fade-up" data-aos-delay="200">Learn More About Our Farm</Link>

                </div>
                <div className="right w-full lg:w-1/2" data-aos="fade-down" data-aos-delay="200">
                    <img src={banner} alt="" className="w-full lg:h-[600px] object-cover rounded-lg"/>
                </div>
            </div>
        </div>
        </>
    )
}
export default About;