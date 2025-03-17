// import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Timeline from "./components/Timeline";
import ScrollToTop from "./components/ScrollToTop";
import Region from "./components/Region";
import Button from "./components/Button";
import Declaration from "./components/Declaration";

import React, { useState, useEffect } from "react";

function App() {
  const [lang, setLang] = useState("en"); // ค่าเริ่มต้นเป็น "en"

  useEffect(() => {
    // ฟังก์ชันดึงภาษาปัจจุบันจาก Google Translate
    const getCurrentLanguage = () => {
      const selectElement = document.querySelector(
        "#gt-mordadam-43217984 select"
      );
      if (selectElement) {
        //     setLang(selectElement.value);
        //   }
        // };

        selectElement.addEventListener("change", (event) => {
          const selectedLang = event.target.value.trim().toLowerCase();
          console.log("🌍 Language changed to:", selectedLang);
          setLang(selectedLang); //  ต้องเป็น String เท่านั้น
        });
      }
    };

    // ดึงค่าภาษาเมื่อ Component โหลดเสร็จ
    getCurrentLanguage();

    // ติดตามการเปลี่ยนแปลงภาษาโดยการเพิ่ม Event Listener
    const interval = setInterval(getCurrentLanguage, 1000);

    return () => clearInterval(interval); // ล้าง Interval เมื่อ Component ถูก Unmount
  }, []);

  const langValue = typeof lang === "string" ? lang : lang?.lang;

  return (
    <div className="LINESeed">
      <Navbar />
      <ScrollToTop />
      <div>
        <img
          src={langValue === "th" ? "/images/TitleTH.png" : "/images/Title.jpg"}
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div>
          <img
            src={
              langValue === "th" ? "/images/BG_1 TH.png" : "/images/BG_1_1.jpg"
            }
            alt=""
          />
        </div>
        {/* <div className="bg-[url('/images/BG_1_2.png')] bg-cover w-full">
          <Region />
        </div> */}
      </div>
      <div className="relative flex flex-col items-center">
        <Button lang={lang} />
      </div>
      <div className="flex flex-col">
        <Declaration lang={lang} />
      </div>
      <div className="flex flex-col">
        <Timeline lang={lang} />
      </div>
      <div>
        <img
          src={
            langValue === "th"
              ? " /images/PartnerTH.png"
              : "/images/Partner.jpg"
          }
        />
        {/* <img src="/images/Partner.jpg" alt="" /> */}
      </div>
      <div className="flex flex-col">
        <Footer />
      </div>
    </div>
  );
}

export default App;
