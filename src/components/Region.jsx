import React from "react";

function Region() {
  return (
    <div className="w-full h-auto p-5 bg-[url('/images/ODOS%20Website_EN_BG%20Section%202.png')] bg-cover bg-center" >
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 bg-[url('/images/ODOS Website_EN_BG Section 2.png')] bg-cover bg-center "> */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 bg-[url('/images/ODOS Website_EN_BG Section 2.png')] bg-cover bg-center"> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ">

        <div className="text-center" >
          <p className="text-2xl sm:text-3xl font-bold ">NORTH AMERICA</p>
          <div className="text-lg sm:text-xl mt-2">
            <p>
              <a
                // href="/pdf/japan.pdf"                // target="_blank"
                rel="noopener noreferrer"
                 className="hover:text-[#869bd4]"
              >
                USA
              </a>
            </p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-2xl sm:text-3xl font-bold mt-4 sm:mt-0">EUROPE</p>
          <div className="text-lg sm:text-xl flex flex-col mt-2 ">
            <a
              //href="/pdf/japan.pdf"              // target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#869bd4]"
            >
              UK
            </a>
            {/* <a
              //href="/pdf/japan.pdf"              // target="_blank"
              rel="noopener noreferrer"
               className="hover:text-[#869bd4]"
            >
              Germany
            </a> */}
            <a
              //href="/pdf/japan.pdf"              // target="_blank"
              rel="noopener noreferrer"
               className="hover:text-[#869bd4]"
            >
              Sweden
            </a>
            <a
              //href="/pdf/japan.pdf"              // target="_blank"
              rel="noopener noreferrer"
               className="hover:text-[#869bd4]"
            >
              Finland
            </a>
            <a
              //href="/pdf/japan.pdf"              // target="_blank"
              rel="noopener noreferrer"
               className="hover:text-[#869bd4]"
            >
              Estonia
            </a>
          </div>
        </div>

        <div className="text-center">
          <p className="text-2xl sm:text-3xl font-bold mt-4 sm:mt-0">
            AUSTRALIA
          </p>
          <div className="text-lg sm:text-xl flex flex-col mt-2">
            <a
              //href="/pdf/japan.pdf"              // target="_blank"
              rel="noopener noreferrer"
               className="hover:text-[#869bd4]"
            >
              Australia
            </a>
            {/* <a
              //href="/pdf/japan.pdf"              // target="_blank"
              rel="noopener noreferrer"
               className="hover:text-[#869bd4]"
            >
              New zealand
            </a> */}
          </div>
        </div>

        <div className="text-center">
          <p className="text-2xl sm:text-3xl font-bold mt-4 sm:mt-0">ASIA</p>
          <div className="text-lg sm:text-xl flex flex-col mt-2 ">
            <a 
              //href="/pdf/japan.pdf"              // target="_blank"
              rel="noopener noreferrer"
               className="hover:text-[#869bd4]"
            >
              China
            </a>
            {/* <a
              
              rel="noopener noreferrer"
               className="hover:text-[#869bd4]"
            >
              India
            </a> */}
            <a
              //href="/pdf/japan.pdf"              // target="_blank"
              rel="noopener noreferrer"
               className="hover:text-[#869bd4]"
            >
              Japan
            </a>
            <a
              //href="/pdf/japan.pdf"              // target="_blank"
              rel="noopener noreferrer"
               className="hover:text-[#869bd4]"
            >
              Korea
            </a>
            <a
              //href="/pdf/japan.pdf"              // target="_blank"
              rel="noopener noreferrer"
               className="hover:text-[#869bd4]"
            >
              Singapore
            </a>
            <a
              //href="/pdf/japan.pdf"              // target="_blank"
              rel="noopener noreferrer"
               className="hover:text-[#869bd4]"
            >
              Taiwan
            </a>
          </div>
        </div>
      </div>
      <div className="mt-16">
        <p className="text-right">
          * Click on the destination to see more details.
        </p>
      </div>
    </div>
  );
}

export default Region;