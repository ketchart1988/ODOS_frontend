<<<<<<< HEAD
import React from "react";
=======
// import React from "react";
>>>>>>> 3962ae1 (Initial commit)
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Timeline from "./components/Timeline";
import ScrollToTop from "./components/ScrollToTop";
import Region from "./components/Region";
import Button from "./components/Button";
import Declaration from "./components/Declaration";

<<<<<<< HEAD
function App() {
=======
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

>>>>>>> 3962ae1 (Initial commit)
  return (
    <div className="LINESeed">
      <Navbar />
      <ScrollToTop />
      <div>
<<<<<<< HEAD
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
=======
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
>>>>>>> 3962ae1 (Initial commit)
      </div>
      <div className="flex flex-col">
        <Footer />
      </div>
    </div>
  );
}

export default App;
