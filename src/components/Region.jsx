// import React from "react";
import React, { useState } from "react";
import ImageModal from "../components/RegionPop";

function Region() {
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [modalAlt, setModalAlt] = useState("");

  const openModal = (image, alt) => {
    setModalImage(image);
    setModalAlt(alt);
    setShowModal(true);
  };
  return (
    <div className="w-full h-auto p-5 bg-[url('/images/ODOS%20Website_EN_BG%20Section%202.png')] bg-cover bg-center" >
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 bg-[url('/images/ODOS Website_EN_BG Section 2.png')] bg-cover bg-center "> */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 bg-[url('/images/ODOS Website_EN_BG Section 2.png')] bg-cover bg-center"> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ">

        <div className="text-center" >
          <p className="text-2xl sm:text-3xl font-bold ">NORTH AMERICA</p>
          <div className="text-lg sm:text-xl mt-2">
            <p>

              {/* <a
                // href="/pdf/japan.pdf"                // target="_blank"
                rel="noopener noreferrer"
                 className="hover:text-[#869bd4]"
              >
                USA
              </a> */}

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                openModal("/images/04_USA.JPG", "USA");
                // src="/images/ODOS Website_EN_Section 5 Declaration.jpg"
              }}
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

            {/* <a
              //href="/pdf/japan.pdf"              // target="_blank"
              rel="noopener noreferrer"
               className="hover:text-[#869bd4]"
            >
              Estonia
            </a> */}

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                openModal("/images/03_Estonia.JPG", "Estonia");
                // src="/images/ODOS Website_EN_Section 5 Declaration.jpg"
              }}
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
            {/* <a
              //href="/pdf/japan.pdf"              // target="_blank"
              rel="noopener noreferrer"
               className="hover:text-[#869bd4]"
            >
              Australia
            </a> */}

<a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                openModal("/images/01_AUS.JPG", "Australia");
                // src="/images/ODOS Website_EN_Section 5 Declaration.jpg"
              }}
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
            
            {/* <a 
              //href="/pdf/japan.pdf"              // target="_blank"
              rel="noopener noreferrer"
               className="hover:text-[#869bd4]"
            >
              China
            </a> */}

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                openModal("/images/05_China.JPG", "China");
                // src="/images/ODOS Website_EN_Section 5 Declaration.jpg"
              }}
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

            
            {/* <a

              rel="noopener noreferrer"
               className="hover:text-[#869bd4]"
            >
              Japan
            </a> */}

<a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                openModal("/images/02_JAP.JPG", "Japan");
                // src="/images/ODOS Website_EN_Section 5 Declaration.jpg"
              }}
              rel="noopener noreferrer"
              className="hover:text-[#869bd4]"
            >
              Japan
            </a>

            <a
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

      {/* Modal */}
      {showModal && (
        <ImageModal
          imageSrc={modalImage}
          altText={modalAlt}
          onClose={() => setShowModal(false)}
        />
      )}

      <div className="mt-16">
        <p className="text-right">
          * Click on the destination to see more details.
        </p>
      </div>
    </div>
  );
}

export default Region;