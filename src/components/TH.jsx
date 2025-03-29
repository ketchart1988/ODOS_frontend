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

            {/* Flag Counter */}
            <div className="flex justify-center my-4">
                <a href="https://info.flagcounter.com/LeL4">
                    <img src="https://s01.flagcounter.com/count2/LeL4/bg_FFFFFF/txt_000000/border_CCCCCC/columns_2/maxflags_10/viewers_0/labels_0/pageviews_0/flags_0/percent_0/" alt="Flag Counter" border="0" />
                </a>
            </div>

            <NavbarTH />
            <ScrollToTop />
            <div>
                <img src="/images/ODOS Website_Detail_Section 1.jpg" alt="" />
            </div>

            <div className="flex flex-col justify-center items-center">
                <img src="/images/odos_open_th.jpg" alt="" />
                <Button />
                <br />
                <br />
                <Region />
            </div>
            <div className="flex flex-col">
                <DeclarationTH />
            </div>
            <div className="flex flex-col">
                <TimelineTH />
            </div>
            <div>
                <img src="/images/ODOS Website_TH_20032025_Section 7 Partner.jpg" alt="" />
            </div>

            <div className="flex flex-col">

                {/* Flag Counter */}
                {/* <div className="flex justify-center my-4">
                    <a href="https://info.flagcounter.com/LeL4">
                        <img src="https://s01.flagcounter.com/count2/LeL4/bg_FFFFFF/txt_000000/border_CCCCCC/columns_2/maxflags_10/viewers_0/labels_0/pageviews_0/flags_0/percent_0/" alt="Flag Counter" border="0" />
                    </a>
                </div> */}
                <FooterTH />
            </div>
        </div>
    );
}

export default TH;