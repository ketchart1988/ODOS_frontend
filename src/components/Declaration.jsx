<<<<<<< HEAD
import React from "react";

function Declaration() {
  return (
    <div>
      <img
        src="/images/Dec.jpg"
        alt=""
        className="w-full h-full object-cover"
=======
function Declaration(lang) {
  const langValue = typeof lang === "string" ? lang : lang?.lang;

  return (
    <div>
      <img
        src={langValue === "th" ? "/images/declareTH.jpg" : "/images/Dec.jpg"}
        alt="ODOS_Timeline"
>>>>>>> 3962ae1 (Initial commit)
      />
    </div>
  );
}

export default Declaration;
