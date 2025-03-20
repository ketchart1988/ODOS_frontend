import React from "react";
// import { Link } from "react-router-dom";
import NavbarTH from "../components/NavbarTH";
import FooterTH from "../components/FooterTH";
import TimelineTH from "../components/TimelineTH";
import ScrollToTop from "../components/ScrollToTop";
import Region from "../components/Region";
import Button from "../components/Button";
import DeclarationTH from "../components/DeclareTH";

function TH() {
    return (
        <div className="LINESeed">
            <NavbarTH />
            <ScrollToTop />
            <div>
                <img src="/images/ODOS Website_Detail_Section 1.jpg" alt="" />
            </div>
            <div className="flex flex-col justify-center items-center">
                <img src="/images/openTH.jpg" alt="" />
                {/* <div className="bg-[url('/images/ODOS Website_EN_BG Section 2.png')] bg-cover w-full"> */}
                {/* <Region /> */}
                {/* </div> */}
            </div>
            <div className="relative flex flex-col items-center">
                <Button />
            </div>
            <div className="flex flex-col">
                <DeclarationTH />
            </div>
            <div className="flex flex-col">
                <TimelineTH />
            </div>
            <div>
                <img src="/images/ParnerTH.jpg" alt="" />
            </div>
            {/* <div>
                <img src="/images/FooterTH.jpg" alt="" />
            </div> */}
            <div className="flex flex-col">
                <FooterTH />
            </div>
        </div>
    );
}

export default TH;