import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar,faLocationDot } from "@fortawesome/free-solid-svg-icons";

import Rating from "../ui/Rating/Rating";


interface feedProps{
    quote:string;
    author:string;
    role:string;
    location:string;
    rating:number;
    recency:string;
    image:string;
    image_description:string
}


const FeedCard:React.FC<feedProps> =({quote,author,role,location,rating,recency,image,image_description}) =>{
    const startnumbers = Math.floor(rating * 10)/ 5;
    return(
        <>
        <div className="feed-card p-3 rounded-md border border-black/50 backdrop-blur-lg h-[300px] w-full lg:w-[500px] flex flex-col gap-1">
            <div className="topcard w-full flex items-center justify-start gap-4">
                <div className="profile lg:w-[100px] lg:h-[100px] w-[50px] h-[50px] ">
                    <img src={image} alt={image_description} className="w-full h-full rounded-full"/>
                </div>
                <div className="names">
                    <h1 className="text-start text-lg lg:text-2xl font-bold">{author}</h1>
                    <p className="text-start lg:text-md text-[12px]">{role}</p>
                </div>
            </div>
            <div className="feed-details w-full flex-grow">
                <p className="text-start mt-3 text-md lg:text-lg">{quote}</p>
            </div>
            <div className="ratings w-full flex items-center justify-start gap-4">
                <Rating rating={rating}/>
                <p className="text-sm lg:text-lg">{startnumbers}/10</p>
            </div>
            <div className="date w-full flex items-center justify-between">
                <div className="left flex items-center justify-center gap-2">
                    <span>
                        <FontAwesomeIcon icon={faLocationDot} className="text-red text-md lg:text-2xl"/>
                    </span>
                    <p className="text-sm lg:text-xl">{location}</p>
                </div>
                <div className="right flex items-center justify-center gap-2">
                    <span>
                        <FontAwesomeIcon icon={faCalendar} className="text-blue-600 text-md lg:text-lg"/>
                    </span>
                    <p className="text-sm lg:text-lg">{recency}</p>
                </div>
            </div>
        </div>
        </>
    )
}
export default FeedCard;