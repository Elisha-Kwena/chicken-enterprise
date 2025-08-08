import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";
import banner from '../../../data/images/Features/banner2.jpg'

interface NavLink {
  id: number;
  label: string;
  path: string;
}

interface MobileNavbarProps {
  isOpen: boolean;
  closeNavbar: () => void;
  links: NavLink[];
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ isOpen, closeNavbar, links }) => {
  return (
    <div className={`
      lg:hidden fixed inset-0 z-40 pt-[60px]
      transform transition-all duration-500 ease-in-out
      ${isOpen ? 'translate-y-0' : '-translate-y-full'}
    `}>
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0">
        <img 
          src={banner} 
          alt="Background" 
          className="w-full h-full object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      </div>

      {/* Navigation Links */}
      <nav 
        className="relative z-10 w-full h-full flex flex-col items-center justify-center gap-6 p-4"
        aria-label="Mobile navigation"
      >
        {links.map(link => (
          <Link
            key={link.id}
            to={link.path}
            onClick={closeNavbar}
            className="text-orangered font-extrabold text-2xl hover:text-yellow transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow focus-visible:ring-offset-4 focus-visible:ring-offset-black rounded-md"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default MobileNavbar;