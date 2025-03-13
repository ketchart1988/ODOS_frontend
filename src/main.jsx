import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkstatus from "./pages/Checkstatus.jsx";
import App from "./App.jsx";
import Captcha from "./pages/Captcha.jsx";
import List from "./pages/List.jsx";
import './index.css';
import Maintenance from "./pages/Maintenance.jsx";

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Router>
      <Routes>
        {/* เส้นทางหน้าแรก */}
        <Route path="/" element={<Maintenance />} />
          {/* <Route path="/" element={<App />} /> */}

        {/* เส้นทางหน้า list */}
        <Route path="/list" element={<List />} />
        {/* เส้นทางที่ต้องตรวจสอบ CAPTCHA */}
        <Route
          path="/check-status"
          element={
            <Captcha>
              <Checkstatus />
            </Captcha>
          }
        />
      </Routes>
    </Router>
  </StrictMode>
);
