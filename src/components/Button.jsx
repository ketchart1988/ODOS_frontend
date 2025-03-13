import React from "react";

function Button() {
  return (
    <div>
      <img
        src="/images/BG_2.png"
        alt=""
        className="w-full h-full object-cover"
      />
   <a
  href="#"
  onClick={(e) => {
    e.preventDefault();
    const userAgent = navigator.userAgent.toLowerCase(); // แปลงเป็นตัวพิมพ์เล็กเพื่อให้ตรวจสอบง่ายขึ้น
    let downloadUrl = "https://xn--72cst3czdd.com/"; // fallback link

    if (userAgent.includes("android")) {
      downloadUrl = "https://play.google.com/store/apps/details?id=th.or.dga.citizenportal";
    } else if (userAgent.includes("iphone") || userAgent.includes("ipad") || userAgent.includes("ipod")) {
      downloadUrl = "itms-apps://apps.apple.com/th/app/id1514331336";
    } else if (userAgent.includes("huawei")) {
      downloadUrl = "https://appgallery.huawei.com/#/app/C107688763";
    }

    window.location.href = downloadUrl;
  }}
  className="absolute left-1/2 transform -translate-x-1/2 bottom-6 sm:bottom-44 bg-[#879bcf] text-white rounded-lg shadow-lg px-3 py-1.5 sm:px-6 sm:py-3 text-sm sm:text-3xl"
>
  Start your application
</a>



    </div>
  );
}

export default Button;
