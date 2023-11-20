import strumLogo from 'src/assets/icons/logoStrum.svg';
import { Link } from "react-scroll";

const MainLogo = () => {
  return (
    <div className="bg-white max-w-[5.5em] max-h-[5.5em] cursor-pointer grow-0">
        <Link
        to="header"
        smooth={true}
        duration={500}
        >
          <img 
          src={strumLogo} 
          alt="mainLogo"
          className='w-full h-full object-cover'/>
        </Link>
    </div>
  )
}

export default MainLogo;