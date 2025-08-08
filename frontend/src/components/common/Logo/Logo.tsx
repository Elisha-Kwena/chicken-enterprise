import React from "react";

import logo from './logo.png'

const Logo:React.FC = ()=>{
    return(
        <>
        <div className="flex items-center justify-start gap-1">
            <img src={logo} alt="" className="w-8 lg:w-10"/>
            <div className="flex flex-col items-start justify-center ">
                <h1 className="text-red uppercase font-extrabold font-['impact'] text-lg lg:text-2xl">Kaura chicken</h1>
                <h2 className="text-green uppercase font-bold font-['impact'] text-md lg:text-xl">enterprise</h2>
            </div>
        </div>
        </>
    )
}
export default Logo;