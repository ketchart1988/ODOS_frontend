import React from "react";

function Footer() {
  return (
    <div class="bg-[#2c2c2c]">
      <img
        src="\images\Logo ODOS and KV_Monochome_White.png"
        alt=""
        className="w-[250px] h-[100px] sm:w-[200px] sm:h-[200px]"
      />
      <div className="">
        <div className="text-[white] text-sm sm:text-xl ml-8">
          <p className="font-bold">อีเมล contactodos@depa.or.th</p>
          <p className="font-bold">ที่อยู่</p>
          <p>234/431 อาคารสำนักงานส่งเสริมเศรษฐกิจดิจิทัล (อาคาร A)</p>
          <p>ซอยลาดพร้าว 10 ถนนลาดพร้าว แขวงจอมพล เขตจตุจักร กรุงเทพมหานคร 10900</p>
          {/* <p>This website is created by Digital Economy Promotion Agency</p> */}
        </div>
        <div className="flex text-[white] place-content-center gap-4 mt-6">
          <a
            href="https://www.facebook.com/share/16BVKLsMhE/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/FBIcon.png"
              alt=""
              className="w-[25px] h-[25px] sm:w-[50px] sm:h-[50px]"
            />
          </a>
          {/* <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/yt_logo_svg.svg"
              alt=""
              className="w-[25px] h-[25px] sm:w-[50px] sm:h-[50px]"
            />
          </a> */}
          <a
            href="https://www.tiktok.com/@odossummercamp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/TikTokIcon.png"
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
