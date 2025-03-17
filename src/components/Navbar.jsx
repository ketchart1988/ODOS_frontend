import React from "react";
import LanguageTranslator from "./LanguageTranslator";

function Navbar({ hideLanguageTranslator }) {
  return (
    <nav className="sticky top-0 z-50 bg-[#869bd4] transition-colors">
      {/* <div className="bg-[black] text-[white] text-3xl text-center place-items-center p-12">
        <p className="text-3xl">
          WE ARE COMING SOON ON <span className="text-[yellow]">1</span> MARCH
          2025
        </p>
        <p className="text-sm mt-6">This website is under maintenance!</p>
      </div> */}
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 sm:p-0">
        <img
          src="\images\Logo_Nav2.png"
          alt=""
          style={{ height: 100, width: 250 }}
          className="hidden md:block"
        />
        {/* <span className="self-center text-4xl font-semibold whitespace-nowrap text-[#869bd4]">
          ODOS
          <span className="hidden sm:inline text-[white]">
            {" "}
            Summer Camp
          </span>
        </span> */}
        <div className="flex justify-end place-items-center">
          <div className="ml-4 text-[white]">
            {!hideLanguageTranslator && <LanguageTranslator />}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
