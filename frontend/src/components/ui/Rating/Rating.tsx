import React from "react";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

interface ratingProps{
    rating:number;
}

const Rating:React.FC<ratingProps> = ({rating}) =>{
    const stars = Math.floor(rating * 10)/10
    const maxRating = 5
    return(
        <>
            <div className="star-rating">
                {Array.from({ length: maxRating }, (_, index) => (
                    <span 
                    key={index} 
                    className={`star text-sm lg:text-2xl  ${index < stars ? "text-yellow" : "text-gray-400"}`}>
                        <FontAwesomeIcon icon={faStar}/>
                    </span>
                ))}
            </div>
        </>
    )
}
export default Rating

