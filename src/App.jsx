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
      <ScrollToTop />
      <div>
        {/* <img src="/images/Section1.png" alt="" /> */}
        <img src="/images/Section 1-en.jpg" alt="" />
      </div>
      <div>
        <img src="/images/ODOS Website_EN_Section 2_0.jpg" alt="" />
      </div>
      <div className="flex flex-col justify-center items-center">


        {/* <br />
        <br /> */}
        <Region />
        <img src="/images/Section 3 - 4 EN.jpg" alt="" />
        <Button />
        <br />
        <br />
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
