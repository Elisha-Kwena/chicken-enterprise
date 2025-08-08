import React from "react";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight,faExpand } from "@fortawesome/free-solid-svg-icons";



interface ProductCardProps {
    
    name: string;
    image: string;
    image2: string;
    image_description: string;
    description: string;
    price: number;
    unit: string;
}


const ProductCard: React.FC<ProductCardProps> = ({name,image,image2,image_description,description,unit,price}) => {
    return (
        <div className="product-card rounded-lg h-[500px] bg-red relative overflow-hidden group" data-aos="zoom-in">
            <button className="absolute w-10 h-10 top-2 right-2 text-orangered font-extrabold text-3xl flex items-center justify-center z-5">
                <FontAwesomeIcon icon={faExpand}/>
            </button>
            <div className="card-banner w-full h-full rounded-lg">
                <img src={image} alt={image_description} className="w-full h-full rounded-lg"/>
            </div>
            <div className="product-details absolute  p-2 flex flex-col top-[100%] gap-1 items-baseline bg-black/70 h-full transition-all duration-300 group-hover:top-0">
                <div className="details-banner w-full  h-[280px]">
                    <img src={image2} alt={image_description} className="w-full h-full object-cover rounded-md"/>
                </div>
                <div className="flex-grow">
                    <h1 className="text-orangered font-bold lg:text-2xl text-2xl">{name}</h1>
                    <p className="text-white text-start mb-3">{description}</p>
                    <p className="price text-white font-extrabold"><span>KSHS </span>{price} <span className="per text-green">({unit})</span></p>
                </div>
                <div className="more-btn flex-grow-1 w-full">
                    <Link to="/products/live-chickens" className="view-btn bg-orangered w-full flex items-center justify-center gap-3 p-3 rounded-md group transition-all duration-300 hover:border-[3px] border-orangered hover:bg-white/20">
                    <p className=" font-bold transition-all duration-300 text-white">View more details</p>
                    <span className="text-orangered text-xl hidden group-hover:block transition-all duration-300">
                        <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                    </Link>
                </div>
            </div>
 
        </div>
    );
}
export default ProductCard;