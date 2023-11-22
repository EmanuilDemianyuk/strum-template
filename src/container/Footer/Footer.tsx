import Description from "src/components/Description";
import WetPrinting from "src/components/WetPrinting";


const Footer = () => {

  return (
    <footer className="bg-black text-white pt-4 text-center border-t border-BrandYellow">
      <Description/>
      <WetPrinting/>
    </footer>
  )
}

export default Footer