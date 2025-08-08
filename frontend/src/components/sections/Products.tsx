import React from "react";


import { Link } from "react-router-dom";

import banner from '../../data/images/products/back1.jpg'
import banner1 from '../../data/images/products/back3.jpg'

import { products } from "../../data/Products";
import ProductCard from "../cards/ProductCard";
const Products:React.FC = () =>{
    return(
        <>
        <div className="w-full h-full relative py-6">
            <div className="hidden lg:block absolute w-full top-0 left-0 h-full bottom-0">
                <img src={banner} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="lg:hidden absolute w-full top-0 left-0 h-full bottom-0 opacity-50 bg-black">
                <img src={banner1} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="details relative z-10 flex flex-col items-center justify-center lg:p-0 px-2">
                <h1 className="text-3xl lg:text-6xl font-extrabold text-orangered" data-aos="fade-left">Farm-Fresh Poultry, Raised Right</h1>
                <p className="text-black lg:text-white mb-3 lg:mb-0 text-lg lg:text-xl" data-aos="fade-down">We deliver healthy, high-quality poultry products straight from our farm to your table. Every chicken and egg is raised with care—free-range, no antibiotics, and handled hygienically. Browse our selection below and taste the difference</p>
                <div className="cards w-[95%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {products.map(product => (
                    <ProductCard 
                        key={product.id}
                        name={product.name}
                        image={product.image}
                        image2={product.image2}
                        image_description={product.image_description}
                        description={product.description}
                        price={product.price}
                        unit={product.unit}
                    />
                ))}
                </div>
            </div>
        </div>
        </>
    )
}
export default Products;