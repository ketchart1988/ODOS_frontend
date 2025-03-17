import { useEffect, useState, useRef } from "react";

const Captcha = ({ children }) => {
  const [captchaValid, setCaptchaValid] = useState(false);
  const [captchaPassed, setCaptchaPassed] = useState(() => {
    const storedValue = localStorage.getItem("captchaPassed");
<<<<<<< HEAD
    return storedValue === "true"; // รีเซ็ตให้เริ่มต้นเป็น false ทุกครั้ง
=======
    return storedValue === "false"; // รีเซ็ตให้เริ่มต้นเป็น false ทุกครั้ง
>>>>>>> 3962ae1 (Initial commit)
  });

  const captchaRendered = useRef(false);

<<<<<<< HEAD
  const loadTurnstileScript = () => {
    return new Promise((resolve, reject) => {
      if (window.turnstile) {
        resolve(); // Turnstile มีอยู่แล้ว
        return;
      }

=======
  useEffect(() => {
    // รีเซ็ตค่าให้ทุกครั้งที่โหลดหน้าใหม่
    localStorage.setItem("captchaPassed", "true");

    // ตรวจสอบว่า Cloudflare Turnstile โหลดสำเร็จหรือยัง
    if (!window.turnstile) {
>>>>>>> 3962ae1 (Initial commit)
      const script = document.createElement("script");
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
      script.async = true;
      script.defer = true;
<<<<<<< HEAD

      script.onload = () => resolve();
      script.onerror = () => reject(new Error("Failed to load Turnstile script"));

      document.body.appendChild(script);
    });
  };

  const renderCaptcha = () => {
    const captchaContainer = document.getElementById("turnstile-container");

    if (captchaContainer && !captchaRendered.current) {
      // ลบ DOM เก่า
      while (captchaContainer.firstChild) {
        captchaContainer.removeChild(captchaContainer.firstChild);
=======
      script.onload = () => {
        console.log("Turnstile Loaded");
      };      
      document.body.appendChild(script);
    }
  }, []);

  useEffect(() => {
    if (!captchaPassed && window.turnstile && !captchaRendered.current) {
      const captchaContainer = document.getElementById("turnstile-container");
      if (captchaContainer) {
        while (captchaContainer.firstChild) {
          captchaContainer.removeChild(captchaContainer.firstChild);
        }
>>>>>>> 3962ae1 (Initial commit)
      }

      window.turnstile.render("#turnstile-container", {
        sitekey: "0x4AAAAAAA5w0p24tBkYd5he", // ใส่ Site Key ที่ถูกต้อง
        callback: (token) => {
          if (token) {
            setCaptchaValid(true);
<<<<<<< HEAD
            console.log("CAPTCHA validated with token:", token);
=======
>>>>>>> 3962ae1 (Initial commit)
          }
        },
        "error-callback": () => {
          setCaptchaValid(false);
<<<<<<< HEAD
          console.error("CAPTCHA encountered an error");
=======
>>>>>>> 3962ae1 (Initial commit)
        },
        "expired-callback": () => {
          setCaptchaValid(false);
          captchaRendered.current = false;
<<<<<<< HEAD
          console.log("CAPTCHA expired. Showing alert...");
          alert(
            "เนื่องจาก Token สำหรับยืนยันตัวตนหมดอายุ\nโปรดกด OK เพื่อรีโหลดใหม่"
          );
          renderCaptcha(); // รีโหลด CAPTCHA อัตโนมัติหลังจากแจ้งเตือน
=======
>>>>>>> 3962ae1 (Initial commit)
        },
      });

      captchaRendered.current = true;
    }
<<<<<<< HEAD
  };

  useEffect(() => {
    loadTurnstileScript()
      .then(() => {
        renderCaptcha();
        console.log("Turnstile script loaded successfully");
      })
      .catch((error) => {
        console.error(error);
        alert("CAPTCHA โหลดไม่สำเร็จ โปรดรีเฟรชหน้าเว็บ");
      });
  }, []);

  useEffect(() => {
    if (!captchaPassed) {
      captchaRendered.current = false; // รีเซ็ตสถานะเมื่อผู้ใช้ยังไม่ผ่าน CAPTCHA
      renderCaptcha();
    }
=======
>>>>>>> 3962ae1 (Initial commit)
  }, [captchaPassed]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (captchaValid) {
      setCaptchaPassed(true);
      localStorage.setItem("captchaPassed", "true");
    } else {
<<<<<<< HEAD
      console.log("CAPTCHA token expired. Showing alert...");
      alert(
        "เนื่องจาก Token สำหรับยืนยันตัวตนหมดอายุ\nโปรดกด OK และกดปุ่ม Refresh อีกครั้งเพื่อรีโหลดใหม่"
      );
      captchaRendered.current = false;
      renderCaptcha(); // รีโหลด CAPTCHA อัตโนมัติหลังจากแจ้งเตือน
=======
      alert(
        "เนื่องจาก Token สำหรับยืนยันตัวตนหมดอายุ\nโปรดกด OK เพื่อรีโหลดใหม่"
      );
      captchaRendered.current = false;
>>>>>>> 3962ae1 (Initial commit)
    }
  };

  if (!captchaPassed) {
    return (
      <div className="flex justify-center items-center h-screen">
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
          <h2 className="text-xl font-sukhumvit text-center">
            กรุณาผ่าน CAPTCHA ก่อนเข้าเว็บไซต์
          </h2>
          <div id="turnstile-container" className="mt-4 justify-items-center"></div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg font-sukhumvit mt-2 ml-[2.6rem] sm:ml-[4.4rem]"
          >
            ยืนยัน
          </button>
        </form>
      </div>
    );
  }

  return <>{children}</>;
};

<<<<<<< HEAD
export default Captcha;
=======
export default Captcha;
>>>>>>> 3962ae1 (Initial commit)
