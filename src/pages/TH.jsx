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
                {/* <img src="/images/ODOS Website_Detail_Section 1.jpg" alt="" /> */}
                <img src="/images/Section 1-th.jpg" alt="" />
            </div>
            <div>
                <img src="/images/ODOS Website_TH_20032025_Section 2_0.jpg" alt="" />
            </div>

            <div className="flex flex-col justify-center items-center">
                
                
                {/* <br />
                <br /> */}
                <Region />
                <img src="/images/Section 3 - 4 TH_0.jpg" alt="" />
                {/* <Button /> */}
                <br />
                <br />
            </div>
            <div className="flex flex-col">
                <DeclarationTH />
            </div>
            <div className="flex flex-col">
                <TimelineTH />
            </div>
            <div>
                <img src="/images/Partners3TH_0.jpg" alt="" />
            </div>

            <div className="flex flex-col">


                <FooterTH />
            


            </div>
        </div>
    );
}

export default TH;