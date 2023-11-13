import MainLogo from "src/components/MainLogo"
import SocialMedia from "src/components/SocialMedia"
import WetPrinting from "src/components/WetPrinting"

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="container flex">
        <MainLogo/>
        <div>
          <p>Description</p>
        </div>
        <SocialMedia/>
      </div>
      <WetPrinting/>
    </footer>
  )
}

export default Footer