
import React from "react";

const ProgressSteps = ({ status }) => {
    const steps = [
        "ยื่นสมัครแล้ว",
        "ผ่านการคัดเลือก\nรอบที่ 1",
        "สอบทักษะ\nภาษาอังกฤษ และ\nและดิจิทัลพื้นฐาน",
        "ผ่านการคัดเลือก\nรอบที่  2",
        "สอบทักษะด้าน\nดิจิทัลระดับกลาง",
        "ผ่านการคัดเลือก\nรอบที่  3",
        "สอบสัมภาษณ์",
        status === "ไม่ผ่าน" ? "ไม่ผ่าน" : "ผ่านสอบสัมภาษณ์",
    ];

    const dates = [
        "24 มี.ค - 16 พ.ค. 68",
        "16 มิ.ย. 68",
        "17 - 30 มิ.ย. 68",
        "1 ก.ค. 68",
        "2 - 13 ก.ค 68",
        "14 ก.ค. 68",
        "26 ก.ค. 68",
        "1 ส.ค 68",
        "4 - 8 ส.ค. 68",
        "4 - 15 ส.ค. 68",
        "16 - 18 ส.ค. 68",
        "23 - 25 ส.ค. 68",
    ];

    const statusMap = {
        "รอการพิจารณา": 0,
        "ผ่านการคัดเลือกครั้งที่ 1": 1,
        "สอบทักษะภาษาอังกฤษ": 2,
        "ผ่านการคัดเลือกครั้งที่ 2": 3,
        "สอบทักษะด้านดิจิทัลระดับกลาง": 4,
        "ผ่านการคัดเลือกครั้งที่ 3": 5,
        "สอบสัมภาษณ์": 6,
        "ผ่านการสอบสัมภาษณ์": 7,
        "ไม่ผ่าน": 7,
    };

    const currentStep = statusMap[status] || 0;

    const visibleSteps = steps.filter((_, index) =>
        index === currentStep - 1 || index === currentStep || index === currentStep + 1
    );

    return (
        <div className="relative flex justify-center items-center mt-6 space-x-6 sm:space-x-12 lg:space-x-24 font-sukhumvit">
        {/* // <div className="relative flex justify-center items-center mt-6 space-x-6 sm:space-x-12 lg:space-x-14 font-sukhumvit">     */}
            {/* แสดงทุกสถานะใน lg ขึ้นไป */}
            {/* <div className="hidden lg:flex space-x-6 sm:space-x-12 lg:space-x-24"> */}
            <div className="hidden lg:flex space-x-6 sm:space-x-12 lg:space-x-18">
                {steps.map((label, index) => renderStep(label, index, currentStep, status, dates, steps))}
            </div>

            {/* แสดงเฉพาะ 3 สถานะใน sm และ md */}
            <div className="flex lg:hidden space-x-6 sm:space-x-12 justify-center">
                {visibleSteps.map((label, index) => {
                    const stepIndex = steps.indexOf(label);
                    return renderStep(label, stepIndex, currentStep, status, dates, steps, index < visibleSteps.length - 1);
                })}
            </div>

        </div>
    );
};

const renderStep = (label, index, currentStep, status, dates, steps, showLine = true) => {

    const isActive = index <= currentStep;
    const isCurrent = index === currentStep;

    const circleColor =
        status === "ไม่ผ่าน"
            ? "bg-red-600 border-red-600"
            : status === "ผ่านการสอบสัมภาษณ์"  
                ? "bg-green-600 border-green-600"
                : isActive
                ? isCurrent && (label === "ได้รับเอกสารแล้ว" || label === "สอบทักษะภาษาอังกฤษ" || label === "สอบทักษะด้าน\nดิจิทัลระดับกลาง" || label === "สอบสัมภาษณ์")
                    ? "bg-orange-500 border-orange-500"
                    : "bg-green-600 border-green-600"
                : "bg-white border-gray-400";

    const lineColor =
        status === "ไม่ผ่าน"
            ? "bg-red-600"
            : status === "ผ่านการสอบสัมภาษณ์"
                ? "bg-green-600"
                : index < currentStep
                    ? "bg-green-600"
                    : "bg-gray-300";

    return (
        <div key={index} className="relative flex flex-col items-center min-h-[120px]">
        {/* // <div key={index} className="relative flex flex-col items-center min-h-[70px] gap-4"> */}


            {/* <div className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full border-4 flex items-center justify-center ${circleColor}`}> */}
            <div className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full border-2 flex items-center justify-center ${circleColor}`}>

                {/* <span className={`text-xs sm:text-sm lg:text-lg ${isActive ? "text-white" : "text-gray-700"} font-sukhumvit`}> */}
                <span className={`text-[10px] sm:text-[12px] lg:text-[14px] ${isActive ? "text-white" : "text-gray-700"} font-sukhumvit`}>

                    {index + 1}
                </span>
            </div>

            {/* <div className="text-gray-900 text-center w-full font-sukhumvit whitespace-nowrap" style={{ fontSize: "clamp(10px, 2vw, 16px)", top: "65px" }}> */}
            <div className="text-gray-900 text-center w-full font-sukhumvit whitespace-nowrap" style={{ fontSize: "clamp(8px, 1.5vw, 12px)", top: "65px" }}>
                {label.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                        {line}
                        <br />
                    </React.Fragment>
                ))}
            </div>

            <div
                className={`absolute text-gray-600 text-center w-full min-h-[10px] 
                    ${dates[index] ? "" : "opacity-0"} 
                    mt-2 sm:mt-2 md:mt-6 
                    text-[7px] sm:text-[8px] md:text-[12.5px] lg:text-[12px] 
                    top-[60px] sm:top-[90px]`}
            >
                {dates[index] && dates[index].includes("\n") ? (
                    <span className="whitespace-pre-line">({dates[index]})</span>
                ) : (
                    <span className="whitespace-nowrap">({dates[index]})</span>
                )}
            </div>

            {showLine && index < steps.length - 1 && (
                <div
                    className={`h-2 ${lineColor} 
                        w-[70px] sm:w-[40px] md:w-[110px] lg:w-[100px] 
                        ml-0 
                        -mr-[50px] sm:-mr-[60px] md:-mr-[120px] lg:-mr-[120px] 
                        absolute -z-10 
                        top-4 sm:top-3 md:top-5 lg:top-6
                        translate-y-[-30%] sm:translate-y-[-40%] md:translate-y-[-55%] lg:translate-y-[-60%]`}
                ></div>
            )}

        </div>
    );
};

export default ProgressSteps;

// className={`absolute text-gray-600 text-center w-full min-h-[10px] 
//     ${dates[index] ? "" : "opacity-0"} 
//     mt-2 sm:mt-2 md:mt-6 
//     text-[7px] sm:text-[8px] md:text-[12.5px] lg:text-[14px] 
//     top-[60px] sm:top-[90px]`}

// w-[80px] sm:w-[60px] md:w-[150px] lg:w-[190px] 
// ml-0 
// -mr-[90px] sm:-mr-[80px] md:-mr-[150px] lg:-mr-[190px] 