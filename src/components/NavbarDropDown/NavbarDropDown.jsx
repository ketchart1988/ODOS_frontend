import { useState } from "react"
import NavbarButton from "./NavbarButton";
import DropDown from "./DropDown";

export default function NavbarDropDown(props) {

    // I recommend to fixed it after routing is fixed.
    const {navType} = props; // I see so many Navbar with different links, so I create object for storing each Routing for temp.

    const selectRoute = {
        "Nav_info": ["/", "/Information", "/qa", "Information", "/infoTH"],
        "Navbar": ["/", "/Information", "/qa", "/EN", "/"],
        "NavbarTH": ["/", "/infoTH", "/qaTH", "/EN", "/"],
        "NavQA": ["/", "/infoTH", "/qa", "/qa", "/qaTH"],
    }

    const routeName = ["Home", "Information", "Q&A", "EN", "TH"]



    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(prev => !prev);
    }

    return (
        <div className="flex justify-end md:hidden w-full h-full relative">
            <NavbarButton handleToggle={handleToggle} />
            {isToggled && <DropDown routeList={selectRoute[navType]} routeName={routeName} />}
        </div>
    )
}
