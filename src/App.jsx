import React from "react";
// import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Timeline from "./components/Timeline";
import ScrollToTop from "./components/ScrollToTop";
import Region from "./components/Region";
import Button from "./components/Button";
import Declaration from "./components/Declaration";

function App() {
  return (
    <div className="LINESeed">
      <Navbar />
      {/* <header>
        <nav className="sticky top-0 z-50 bg-[#8A9ED0] transition-colors">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 sm:p-0">
            <img
              src="\images\Logo_Nav2.png"
              alt=""
              style={{ height: 100, width: 250 }}
              className="hidden md:block"
            />
          </div>
          <div>
            <ul className="flex space-x-4"></ul>
          </div>
        </nav>
      </header> */}
      <ScrollToTop />
      <div>
        <img src="/images/Section1.png" alt="" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <img src="/images/ODOS Website_EN_before 24 Mar_Section 3 - 4.png" alt="" />
        {/* <div className="bg-[url('/images/ODOS Website_EN_BG Section 2.png')] bg-cover w-full"> */}
          {/* <Region /> */}
        {/* </div> */}
      </div>
      <div className="relative flex flex-col items-center">
        <Button />
      </div>
      <div className="flex flex-col">
        <Declaration />
      </div>
      <div className="flex flex-col">
        <Timeline />
      </div>
      <div>
        <img src="/images/Partner.jpg" alt="" />
      </div>
      {/* <div>
        <img src="/images/Footer.png " alt="" />
      </div> */}
      <div className="flex flex-col">
        <Footer />
      </div>
    </div>
  );
}

export default App;
