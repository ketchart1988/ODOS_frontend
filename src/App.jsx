import React from "react";
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
      <ScrollToTop />
      <div>
        <img src="/images/Title.jpg" alt="" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <img src="/images/BG_1_1.png" alt="" />
        <div className="bg-[url('/images/BG_1_2.png')] bg-cover w-full">
          <Region />
        </div>
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
      <div className="flex flex-col">
        <Footer />
      </div>
    </div>
  );
}

export default App;
