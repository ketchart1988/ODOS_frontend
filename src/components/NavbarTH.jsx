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
          src="/images/Logo ODOS and KV_Monochome_Black.png"
          alt="Logo ODOS"
          style={{ height: 100, width: 100 }}
          className="hidden md:block"
        />

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
                <Link to="/check-status">Check Status</Link> {/* ✅ ใช้ lowercase เพื่อให้ตรงกับ Route */}
              </li>
              <li>
                <Link to="/qaTH">Q&A</Link>
              </li>
              <li>
                <Link to="/Dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/Announcement">Announcement</Link>
              </li>
            </ul>
          </div>

          <div className="pr-3 text-[12px]">
            <Link to="/EN">EN</Link>
            <span> | </span>
            <Link to="/">TH</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavbarTH;
