import strumLogo from 'src/assets/strumLogo.svg';
import { Link } from "react-scroll";

const MainLogo = () => {
  return (
    <div className="bg-white rounded-full overflow-hidden border max-w-[2.5em] max-h-[2.5em] cursor-pointer">
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