import React from "react";

function Button(lang) {
  const langValue = typeof lang === "string" ? lang : lang?.lang;

  return (
    <div>
      <img
        // src="/images/BG_2.png"
        src={langValue === "th" ? "/images/BG_2TH.png" : "/images/BG_2.png"}
        alt=""
        className="w-full h-full object-cover"
      />
      <a
        href="https://xn--72cst3czdd.com/"
        target="_blank"
        className="absolute left-1/2 transform -translate-x-1/2 bottom-6 sm:bottom-44 bg-[#879bcf] text-white rounded-lg shadow-lg px-3 py-1.5 sm:px-6 sm:py-3 text-sm sm:text-3xl"
      >
        Start your application
      </a>
    </div>
  );
}

export default Button;
