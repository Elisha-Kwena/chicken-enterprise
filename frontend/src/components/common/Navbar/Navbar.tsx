import React from "react";
import { useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

import Logo from "../Logo/Logo";
import MobileNavbar from "./MobileNavbar";

import { Link } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";

interface NavLink {
    id: number;
    label: string;
    path: string;
  }

const links : NavLink[] = [
    {id:1,label:"Home",path:ROUTES.HOME},
    {id:2,label:"About Us",path:ROUTES.ABOUT},
    {id:3,label:"Services",path:ROUTES.SERVICES},
    {id:4,label:"Products",path:ROUTES.PRODUCTS},
    {id:5,label:"Gallery",path:ROUTES.GALLERY},
    {id:6,label:"Blog",path:ROUTES.BLOG},
    {id:7,label:"Contact Us",path:ROUTES.CONTACT},

]

const Navbar: React.FC = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false)

    const toggleNavbar = (): void => {
        setIsNavbarOpen(prevState => !prevState)
    }

    const closeNavbar = (): void => {
        setIsNavbarOpen(false);
    };
    

    return (
        <header className="w-full overflow-hidden px-2 fixed top-0 left-0 grid place-items-center z-50 bg-pale_brown">
            <nav className="w-full flex items-center justify-between p-1 relative">
                <Logo/>
                <div className="menu items-center justify-between gap-4 hidden lg:flex">
                    {links.map(link =>(
                        <Link
                        key={link.id}
                        className="font-bold text-orangered px-3 py-1 rounded-md transition-all duration-300 hover:bg-red hover:text-yellow"
                         to ={link.path}>{link.label}</Link>
                    ))}
                </div>
                <div className="flex items-center justify-end gap-4">
                    <Link to="" className="bg-red text-white font-bold p-3 px-6 rounded-md hover:bg-orangered">Order Now</Link>
                    <button
                    onClick={toggleNavbar}
                    aria-expanded={isNavbarOpen}
                    aria-label="Toggle navigation"
                    className="flex lg:hidden items-center justify-center bg-red w-12 rounded-md h-12">
                        {isNavbarOpen ? (
                            <FontAwesomeIcon icon={faXmark} className="text-white text-4xl"/>
                        ) : <FontAwesomeIcon icon={faBars} className="text-white text-4xl"/>
                        }
                        
                    </button>
                </div>
            </nav>
            <MobileNavbar 
                isOpen={isNavbarOpen} 
                closeNavbar={closeNavbar}
                links={links}
            />
        </header>
    );
}
export default Navbar;