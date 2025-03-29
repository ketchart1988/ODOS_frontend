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

      {/* Flag Counter */}
      <div className="flex justify-center my-4">
        <a href="https://info.flagcounter.com/LeL4">
          <img src="https://s01.flagcounter.com/count2/LeL4/bg_FFFFFF/txt_000000/border_CCCCCC/columns_2/maxflags_10/viewers_0/labels_0/pageviews_0/flags_0/percent_0/" alt="Flag Counter" border="0" />
        </a>
      </div>

      <Navbar />
      <ScrollToTop />
      <div>
        <img src="/images/Section1.png" alt="" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <img src="/images/odos_open_en.png" alt="" />

        <Button />
        <br />
        <br />
        <Region />
      </div>
      <div className="flex flex-col">
        <Declaration />
      </div>
      <div className="flex flex-col">
        <Timeline />
      </div>
      <div>
        <img src="/images/ODOS Website_EN_Section 7 Partner.jpg" alt="" />
      </div>
      <div className="flex flex-col">
        <Footer />
      </div>
    </div>
  );
}

export default App;
