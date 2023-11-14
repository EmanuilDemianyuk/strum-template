// import { Link } from "react-scroll";
import CompanyLink from "src/components/CompanyLink";
import Description from "src/components/Description";
import MainLogo from "src/components/MainLogo";
import SocialMedia from "src/components/SocialMedia";
import WetPrinting from "src/components/WetPrinting";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container p-4 py-8 flex flex-wrap justify-between lg:flex-nowrap">
        <div>
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