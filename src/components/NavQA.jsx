import React from "react";
import { Link } from "react-router-dom";

function NavbarTH({ hideLanguageTranslator }) {
  return (
    <nav className="sticky top-0 z-50 bg-[#FFF200] transition-colors">
      {/* <div className="bg-[black] text-[white] text-3xl text-center place-items-center p-12">
        <p className="text-3xl">
          WE ARE COMING SOON ON <span className="text-[yellow]">1</span> MARCH
          2025
        </p>
        <p className="text-sm mt-6">This website is under maintenance!</p>
      </div> */}
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 sm:p-0">
        <img
          src="\images\Logo ODOS and KV_Monochome_Black.png"
          alt=""
          style={{ height: 100, width: 100 }}
          className="hidden md:block"
        />

        {/* <div className="flex justify-end place-items-center">
          <div className="ml-4 text-[white]">
            {!hideLanguageTranslator && <LanguageTranslator />}
          </div>
        </div> */}
        <div className="flex font-weird">
          <div>
            <ul className="flex gap-6 text-[12px] pr-4">
              <Link to="/">Home</Link>
              {/* <a href="/Maintenance">About</a> */}
              <li>
                <a href="/InfoTH">Information</a>
              </li>
              <li>
                <a href="/qa">Q&A</a>
              </li>
              <li>
                <a href="/Dashboard">Dashboard</a>
              </li>

            </ul>
          </div>
          <div className="pr-3 text-[12px]">
            <Link to='/qa'>EN</Link>
            <span> | </span>
            <Link to='/qaTH'>TH</Link>
          </div>
        </div>



        {/* <ul className="flex">
          <li>
            <Link to="/src/pages/TH" className="text-white hover:text-gray-300">
              TH
            </Link>
          </li>
          <span className="text-white hover:text-gray-300">|</span>
          <li>
            <Link to="/app.jsx" className="text-white hover:text-gray-300">
              EN
            </Link>
          </li>
        </ul> */}
      </div>
    </nav>
  );
}

export default NavbarTH;
