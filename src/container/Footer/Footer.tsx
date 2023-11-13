import { Link } from "react-scroll";
import CompanyLink from "src/components/CompanyLink";
import Description from "src/components/Description";
import MainLogo from "src/components/MainLogo";
import SocialMedia from "src/components/SocialMedia";
import WetPrinting from "src/components/WetPrinting";


const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="container flex justify-between">
        <div className="max-w-[28.75rem]">
          <MainLogo/>
          <Description/>
          <SocialMedia/>
        </div>
          <CompanyLink/>
      </div>
      <WetPrinting/>
    </footer>
  )
}

export default Footer