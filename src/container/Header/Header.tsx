import MainLogo from "src/components/NavMenu/MainLogo"
import NavMenu from "src/components/NavMenu"
import HourServices from "src/components/NavMenu/HourServices/indes"

const Header = () => {
  return (
    <header className="container">
        <div className="bg-yellow-500 flex justify-between">
            <MainLogo/>
            <NavMenu/>
            <HourServices/>
        </div>
    </header>
  )
}

export default Header;