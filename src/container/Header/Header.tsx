import MainLogo from "src/components/MainLogo"
import NavMenu from "src/components/NavMenu"
import HourServices from "src/components/NavMenu/HourServices/indes"

const Header = () => {
  return (
    <header name="header" className="bg-black text-white w-full h-24 fixed top-0 left-0 z-20">
        <div className="container w-full h-full flex justify-between items-center">
            <MainLogo/>
            <NavMenu/>
            <HourServices/>
        </div>
    </header>
  )
}

export default Header;