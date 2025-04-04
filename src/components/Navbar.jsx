import React from "react";
import LanguageTranslator from "./LanguageTranslator";
import { Link } from "react-router-dom";
import Maintenance from "../pages/Maintenance";
import Information from "../pages/Information";
import NavbarDropDown from "./NavbarDropDown/NavbarDropDown";


function Navbar({ hideLanguageTranslator }) {
  return (
    <nav className="sticky top-0 z-50 bg-[#FFF200] transition-colors h-[6.25rem]">
      <div className="max-w-screen-xl h-full flex flex-wrap items-center justify-between mx-auto md:px-8">
        <img
          src="\images\Logo ODOS and KV_Monochome_Black.png"
          alt="logo"
          style={{ height: 100, width: 100 }}
          className="hidden md:block"
        />
        
        <div className="md:flex font-weird hidden">
          <div className="flex gap-6 text-[12px] pr-4">
            <Link to="/">Home</Link>
            {/* <Link to="/Maintenance">About</Link> */}
            <Link to="/Information">Information</Link>
            <Link to="/qa">Q&A</Link>
            
          </div>
          <div className="pr-3 text-[12px]">
            <Link to='/EN'>EN</Link>
            <span> | </span>
            <Link to='/'>TH</Link>
          </div>        
        </div>
        <NavbarDropDown navType={"Navbar"} />
        
      </div>
    </nav>
  );
}

export default Navbar;
