import { Navbar, IconButton } from "@material-tailwind/react";
import { useEffect, useRef } from "react";
import useClickOutside from "src/hooks/useClickOutside";
import NavLink from "./NavLink";
import { open, close } from "src/assets/icons/burgerIcon";


const NavMenu = ( { openNavMenu, setOpenNavMenu }: any ) => {
  const menuId = useRef(null);

  useClickOutside(menuId, () => !openNavMenu || setTimeout(() => setOpenNavMenu(false), 50));
  useEffect(() => {
      window.addEventListener(
        "resize",
        () => window.innerWidth >= 960 && setOpenNavMenu(false),
      );
    }, []);

  return (
    <div>
        <Navbar 
        ref={menuId} 
        className="bg-inherit mx-auto  shadow-none w-full border-none">

            <div className="hidden lg:block">
                <NavLink/>
            </div> 

            {/* Burger menu icon*/}
            <IconButton
                variant="text"
                className="block lg:hidden h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent"
                ripple={false}
                onClick={() => setOpenNavMenu(!openNavMenu)}
            >
                {!openNavMenu ? open : close}
            </IconButton>
        </Navbar>
    </div>
  )
}

export default NavMenu;