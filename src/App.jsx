<<<<<<< HEAD
// import { Link } from "react-router-dom";
=======
import { Routes, Route } from "react-router-dom";
>>>>>>> 9fe6f56 (Initial commit for 25-06-25-the-final-destination)
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Timeline from "./components/Timeline";
import ScrollToTop from "./components/ScrollToTop";
import Region from "./components/Region";
import Button from "./components/Button";
import Declaration from "./components/Declaration";
<<<<<<< HEAD

function App() {
  return (
    <div className="LINESeed">

=======
import Checkstatus from "./pages/Checkstatus";

// สร้าง Home component สำหรับหน้าแรก
function Home() {
  return (
    <div className="LINESeed">
>>>>>>> 9fe6f56 (Initial commit for 25-06-25-the-final-destination)
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
<<<<<<< HEAD


        {/* <br />
        <br /> */}
        <Region />
        <img src="/images/Section 3 - 4 EN.jpg" alt="" />
        <Button />
=======
        {/* <br />
        <br /> */}
        <Region />
        <img src="/images/Section 3 - 4 EN_0.jpg" alt="" />
        {/* <Button /> */}
>>>>>>> 9fe6f56 (Initial commit for 25-06-25-the-final-destination)
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
<<<<<<< HEAD
        <img src="/images/ODOS Website_EN_Section 7 Partner.jpg" alt="" />
=======
        <img src="/images/Partner1EN_0.jpg" alt="" />
>>>>>>> 9fe6f56 (Initial commit for 25-06-25-the-final-destination)
      </div>
      <div className="flex flex-col">
        <Footer />
      </div>
    </div>
  );
}

<<<<<<< HEAD
export default App;
=======
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkstatus" element={<Checkstatus />} />
      {/* เพิ่ม routes อื่นๆ ตามต้องการ */}
      {/* <Route path="/InfoTH" element={<InfoTH />} />
      <Route path="/qaTH" element={<QaTH />} />
      <Route path="/Dashboard" element={<Dashboard />} /> */}
    </Routes>
  );
}

export default App;
>>>>>>> 9fe6f56 (Initial commit for 25-06-25-the-final-destination)
