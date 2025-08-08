import React from "react";
import { useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Logo from "../common/Logo/Logo";
import { Link } from "react-router-dom";

import { faFacebook, faYoutube, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
const socialLinks = [
    {id:1,icon:faFacebook,link:"https://www.facebook.com/KauraChickenEnterprise",hover:"hover:text-blue-400"},
    {id:2,icon:faXTwitter,link:"https://twitter.com/KauraChickenEnt",hover:"hover:text-black"},
    {id:3,icon:faInstagram,link:"https://www.instagram.com/kaurachickenenterprise/",hover:"hover:text-orangered"},
    {id:4,icon:faYoutube,link:"https://www.youtube.com/channel/UCauraChickenEnterprise",hover:"hover:text-red"},
    
]

const quicklinks =[
    {id:1,label:"Products",path:""},
    {id:2,label:"Services",path:""},
    {id:3,label:"Blog",path:""},
    {id:4,label:"Gallery",path:""},
    {id:5,label:"About Us",path:""},
    {id:6,label:"Contact Us",path:""},
    {id:7,label:"Help",path:""},
    {id:8,label:"FAQs",path:""},
]
const contacts =[
    {id:1,label:"Phone",value:"+2547000000"},
    {id:2,label:"WhatsApp",value:"+25475373567"},
    {id:3,label:"Email",value:"kaurachicken@gmail.com"},
]
const location = [
    {id:1,label:"Busia County"},
    {id:2,label:"Busia Town"},
    {id:3,label:"P.O.BOX 50405-400"},
    {id:4,label:"Kenya"},
]

const Footer:React.FC = () =>{
    const [currentyear, setCurrentyear] = useState(new Date().getFullYear())
    return(
        <>
            <footer className="w-full py-14 mt-20 bg-pale_brown">
                <div className="w-full px-3 lg:px-0 lg:w-[95%] mx-auto grid items-start grid-cols-1 lg:grid-cols-4 border-b-[3px] pb-8">
                    <div className="flex flex-col gap-0">
                        <Logo/>
                        <p className="text-start">Farm-fresh Kenyan poultry, raised ethically and delivered straight to your table—pure quality, no middlemen.</p>
                        <div className="flex items-center mt-3 justify-start gap-2">
                            {socialLinks.map(link =>(
                                <a 
                                key={link.id}
                                href={link.link}
                                className={`text-3xl ${link.hover} text-gray-600 w-10 h-10 bg-transparent transition-all duration-300 hover:-translate-y-2 hover:bg-white flex items-center justify-center rounded-full`}
                                >
                                    <FontAwesomeIcon icon={link.icon}/>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <h1 className="font-bold mb-4 text-start lg:text-center">Quick Links</h1>
                        {quicklinks.map(link =>(
                            <a
                            key={link.id}
                            href={link.path}
                            className="text-blue-600 text-start lg:text-center hover:text-red"
                            >{link.label}</a>

                        ))}
                    </div>
                    <div className="flex flex-col lg:items-center">
                        <h1 className="font-bold mb-4 text-start lg:text-center">Location</h1>
                        {location.map(link =>(
                            <p
                            key={link.id}
                            className="text-blue-600 text-start lg:text-center flex items-center justify-start gap-1"
                            >{link.label}</p>

                        ))}
                    </div>
                    <div className="flex flex-col lg:items-center">
                        <h1 className="font-bold mb-4 text-start lg:text-center">Contacts</h1>
                        {contacts.map(link =>(
                            <p
                            key={link.id}
                            className="text-blue-600 text-start lg:text-center flex items-center justify-start gap-1"
                            >{link.label} : {link.value}</p>

                        ))}
                    </div>
                </div>
                <div className="flex flex-row w-[95%] mx-auto items-center justify-between ">
                    <div className="left">
                        <p className="text-start">Made by:</p>
                        <Link to="" className="text-blue-500 flex flex-col gap-0 items-start justify-start">
                        <span className="font-extrabold uppercase text-2xl">Luminary</span>
                        <span className="text-white">Softwares LTD</span>
                        </Link>
                        <p>call: <span className="text-bold">+254707575589</span> or</p> 
                        <p className="text-start">call: <span className="text-bold">+254115414231</span></p>
                    </div>
                    <div className="right flex lg:flex-row flex-col items-center justify-end  gap-4">
                        <Link to="" className="text-blue-500 text-lg hover:text-red hover:underline">Terms & Conditions</Link>
                        <Link to="" className="text-blue-500 text-lg hover:text-red hover:underline">Privacy Policy</Link>
                    </div>
                </div>
                <div className="text-center text-xl font-bold mt-4">&copy; {currentyear} Kaura Chicken Enterprice LTD</div>
            </footer>
        </>
    )
}
export default Footer