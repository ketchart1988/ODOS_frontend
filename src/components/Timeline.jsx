<<<<<<< HEAD
function Timeline() {
  return (
    <div>
      <div className="">
        <img src={"/images/Timeline.jpg"} alt="ODOS_Timeline" />
      </div>

      
=======
function Timeline(lang) {
  const langValue = typeof lang === "string" ? lang : lang?.lang; //  ดึงค่าจาก Object ถ้ามี

  return (
    <div>
      <div className="">
        {/* <img src={"/images/Timeline.jpg"} alt="ODOS_Timeline" /> */}
        {/* <img src={"/images/ODOS Web_TH_Section 6 Timeline.jpg"} alt="ODOS_Timeline" /> */}
        <img
          src={
            langValue === "th"
              ? "/images/TimelineTH.png"
              : "/images/Timeline.jpg"
          }
          alt="ODOS_Timeline"
        />
        {/* <img src={lang === "en" ? "/images/Timeline.jpg" : "/images/ODOS Web_TH_Section 6 Timeline.jpg"} alt="ODOS_Timeline" /> */}
      </div>
>>>>>>> 3962ae1 (Initial commit)
    </div>
  );
}

export default Timeline;
