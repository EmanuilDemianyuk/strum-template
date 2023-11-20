import { useEffect, useState } from 'react';
import Description from "src/components/Description";
import MainLogo from "src/components/MainLogo";
import NavLink from "src/components/NavMenu/NavLink";
import SocialMedia from "src/components/SocialMedia";
import WetPrinting from "src/components/WetPrinting";


const Footer = () => {
  const [optionNavLink, setOptionNavLink] = useState<boolean>(true);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        window.innerWidth >= 960 
        ? setOptionNavLink(true)
        : setOptionNavLink(false)
      },
    );
  });
  

  return (
    <footer className="bg-black text-white">
      <div className="container p-4 py-8 flex flex-wrap justify-between lg:flex-nowrap">
        <div>
          <MainLogo/>
          <Description/>
          <SocialMedia/>
        </div>
        <div className="min-w-[10em] text-center py-4">
          <NavLink reverse={optionNavLink}/>
        </div>
      </div>
      <WetPrinting/>
    </footer>
  )
}

export default Footer