import React from "react";

function Footer() {
  return (
    <div class="bg-[#869bd4]">
      <img
        src="\images\Logo_Nav2.png"
        alt=""
        className="w-[250px] h-[100px] sm:w-[350px] sm:h-[150px]"
      />
      <div className="">
        <div className="text-[white] text-sm sm:text-xl ml-8">
          <p className="font-bold">Email: contactodos@depa.or.th</p>
          <p className="font-bold">Address</p>
          <p>234/431 Lat Phroa Road, Soi Lat Phrao 10</p>
          <p>Chom Phon Subdistrict, Chatuchak District, Bangkok 10900</p>
          <p>This website is created by Digital Economy Promotion Agency</p>
        </div>
        <div className="flex text-[white] place-content-center gap-4 mt-6">
          <a
            href="https://www.facebook.com/share/16BVKLsMhE/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/fb_logo_svg.svg"
              alt=""
              className="w-[25px] h-[25px] sm:w-[35px] sm:h-[50px]"
            />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/yt_logo_svg.svg"
              alt=""
              className="w-[25px] h-[25px] sm:w-[50px] sm:h-[50px]"
            />
          </a>
          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/tk_logo_svg.svg"
              alt=""
              className="w-[25px] h-[25px] sm:w-[50px] sm:h-[50px]"
            />
          </a>
        </div>
      </div>
      <div className="text-[white] text-center text-base mt-6">
        <p>©2025. Powered and secured by depa</p>
      </div>
    </div>
  );
}

export default Footer;
