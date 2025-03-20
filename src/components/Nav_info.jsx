import React from "react";
import { Link } from "react-router-dom";

function Navbar({ }) {
    return (
        <nav className="sticky top-0 z-50 bg-[#FFF200] transition-colors">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 sm:p-0">
                <img
                    src="\images\Logo ODOS and KV_Monochome_Black.png"
                    alt=""
                    style={{ height: 100, width: 100 }}
                    className="hidden md:block"
                />
                <div className="flex">
                    <div className="flex gap-6 text-[12px] pr-4">
                        <Link to="/">Home</Link>
                        {/* <Link to="/Maintenance">About</Link> */}
                        <Link to="/Information">Information</Link>
                        <Link to="/Maintenance">News</Link>
                    </div>
                    <div className="text-[12px] pr-3">
                        <Link to='/Information'>EN</Link>
                        <span> | </span>
                        <Link to='/infoTH'>TH</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;