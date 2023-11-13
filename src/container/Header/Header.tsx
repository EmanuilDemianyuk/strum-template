import MainLogo from "src/components/MainLogo"
import NavMenu from "src/components/NavMenu"
import HourServices from "src/components/NavMenu/HourServices/indes"

const Header = () => {
  return (
    <header className=" bg-BrandYellow">
        <div className="flex justify-between container">
            <MainLogo/>
            <NavMenu/>
            <HourServices/>
        </div>
    </header>
  )
}

export default Header;