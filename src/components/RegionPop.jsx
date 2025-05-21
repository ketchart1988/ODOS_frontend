// components/ImageModal.js
import React from "react";

const ImageModal = ({ imageSrc, altText, onClose }) => {
  console.log("กำลังแสดงรูป:", imageSrc); // ✅ ใช้ console.log แทน print

    return (

    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-4 shadow-xl relative max-w-3xl w-full">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-red-600 text-xl"
        >
          ✕
        </button>
        <img
          src={imageSrc}
        //   src="/images/02_JAP.JPG"
          alt={altText}
          className="w-full h-auto rounded"
        />
      </div>
    </div>
  );
};

export default ImageModal;
