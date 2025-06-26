import React from "react";
import LanguageTranslator from "./LanguageTranslator";
import { Link } from "react-router-dom";
import Maintenance from "../pages/Maintenance";
import Information from "../pages/Information";


function NavbarDashboard({ hideLanguageTranslator }) {
  return (
    <nav className="sticky top-0 z-50 bg-[#FFF200] transition-colors">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 sm:p-0">
        <img
          src="\images\Logo ODOS and KV_Monochome_Black.png"
          alt=""
          style={{ height: 100, width: 100 }}
          className="hidden md:block"
        />
        
        <div className="flex font-weird">
          <div className="flex gap-6 text-[12px] pr-4">
            <Link to="/">Home</Link>
            {/* <Link to="/Maintenance">About</Link> */}
<<<<<<< HEAD
            <Link to="/Information">Information</Link>
            <Link to="/qa">Q&A</Link>
=======
            <Link to="/InfoTH">Information</Link>
            <Link to="/Checkstatus">Check Status</Link>
            <Link to="/qaTH">Q&A</Link>
>>>>>>> 9fe6f56 (Initial commit for 25-06-25-the-final-destination)
            <Link to="/Dashboard">Dashboard</Link>
            
          </div>
          <div className="pr-3 text-[12px]">
            <Link to='/EN'>EN</Link>
            <span> | </span>
            <Link to='/'>TH</Link>
          </div>        
        </div>
        
      </div>
    </nav>
  );
}

<<<<<<< HEAD
export default NavbarDashboard;
=======
export default NavbarDashboard;
>>>>>>> 9fe6f56 (Initial commit for 25-06-25-the-final-destination)
