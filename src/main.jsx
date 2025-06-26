import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkstatus from "./pages/Checkstatus.jsx";
import App from "./App.jsx";
import Captcha from "./pages/Captcha.jsx";
import List from "./pages/List.jsx";
import "./index.css";
import Maintenance from "./pages/Maintenance.jsx";
<<<<<<< HEAD
import TH from "./components/TH.jsx";
import Information from "./pages/Information.jsx";
import InfoTH from "./pages/infoTH.jsx";
import QaTH from "./pages/qaTH.jsx";
import Qa from "./pages/qa.jsx"
import Dashboard from "./pages/Dashboard.jsx"
=======
import TH from "./pages/TH.jsx";
import Information from "./pages/Information.jsx";
import InfoTH from "./pages/infoTH.jsx";
import QaTH from "./pages/qaTH.jsx";
import Qa from "./pages/qa.jsx";
import Dashboard from "./pages/Dashboard.jsx";
>>>>>>> 9fe6f56 (Initial commit for 25-06-25-the-final-destination)

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Router>
      <Routes>
        {/* เส้นทางหน้าแรก */}
        {/* <Route path="/" element={<Maintenance />} /> */}
        <Route path="/EN" element={<App />} />
<<<<<<< HEAD
        
=======

>>>>>>> 9fe6f56 (Initial commit for 25-06-25-the-final-destination)
        <Route path="/" element={<TH />} />

        {/* เส้นทางหน้า list */}
        {/* <Route path="/list" element={<List />} /> */}
        {/* เส้นทางหน้า Maintenance */}
        <Route path="/Maintenance" element={<Maintenance />} />
        {/* เส้นทางหน้า Information */}
        <Route path="/Information" element={<Information />} />
        <Route path="/infoTH" element={<InfoTH />} />
        <Route path="/qaTH" element={<QaTH />} />
        <Route path="/qa" element={<Qa />} />
        <Route path="/Dashboard" element={<Dashboard />} />

        {/* เส้นทางที่ต้องตรวจสอบ CAPTCHA */}
        <Route
<<<<<<< HEAD
          path="/check-status"
          element={
            <Captcha>
              <Checkstatus />
            </Captcha>
          }
        />
=======
  path="/Checkstatus"
  element={
    <Captcha>
      <Checkstatus />
    </Captcha>
  }
/>

>>>>>>> 9fe6f56 (Initial commit for 25-06-25-the-final-destination)
      </Routes>
    </Router>
  </StrictMode>
);
