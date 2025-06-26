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
<<<<<<< HEAD
          src="\images\Logo ODOS and KV_Monochome_Black.png"
          alt=""
=======
          src="/images/Logo ODOS and KV_Monochome_Black.png"
          alt="Logo ODOS"
>>>>>>> 9fe6f56 (Initial commit for 25-06-25-the-final-destination)
          style={{ height: 100, width: 100 }}
          className="hidden md:block"
        />

<<<<<<< HEAD
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
                <a href="/qaTH">Q&A</a>
              </li>
              <li>
                <a href="/Dashboard">Dashboard</a>
              </li>

            </ul>
          </div>
          <div className="pr-3 text-[12px]">
            <Link to='/EN'>EN</Link>
            <span> | </span>
            <Link to='/'>TH</Link>
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
=======
        <div className="flex font-weird">
          <div>
            <ul className="flex gap-6 text-[12px] pr-4">
              <li>
                <Link to="/">Home</Link>
              </li>
              {/* <li>
                <Link to="/Maintenance">About</Link>
              </li> */}
              <li>
                <Link to="/InfoTH">Information</Link>
              </li>
              <li>
                <Link to="/checkstatus">Check Status</Link> {/* ✅ ใช้ lowercase เพื่อให้ตรงกับ Route */}
              </li>
              <li>
                <Link to="/qaTH">Q&A</Link>
              </li>
              <li>
                <Link to="/Dashboard">Dashboard</Link>
              </li>
            </ul>
          </div>

          <div className="pr-3 text-[12px]">
            <Link to="/EN">EN</Link>
            <span> | </span>
            <Link to="/">TH</Link>
          </div>
        </div>
>>>>>>> 9fe6f56 (Initial commit for 25-06-25-the-final-destination)
      </div>
    </nav>
  );
}

export default NavbarTH;
