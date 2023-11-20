import MainLogo from "src/components/MainLogo"
import NavMenu from "src/components/NavMenu"
import HourServices from "src/components/NavMenu/HourServices/indes"
import { useState } from "react";
import NavLink from "src/components/NavMenu/NavLink";
import { Collapse } from "@material-tailwind/react";

const Header = () => {
  const [openNavMenu, setOpenNavMenu] = useState<boolean>(false);
  return (
    <header id="header" className="bg-black text-white w-full h-24 fixed top-0 left-0 z-20">
        <div className="container p-4 w-full h-full flex justify-between items-center">
            <MainLogo/>
            <NavMenu 
              openNavMenu={openNavMenu} 
              setOpenNavMenu={setOpenNavMenu}/>
            <span className="hidden lg:block">
              <HourServices/>
            </span>
        </div>

        {/* Burger slide */}
        <Collapse open={openNavMenu}>
                <div className="flex flex-col justify-center items-center bg-black">
                    <NavLink
                      reverse={true}
                    />
                    <span className="py-4">
                      <HourServices/>
                    </span>
                </div>
        </Collapse>
    </header>
  )
}

export default Header;