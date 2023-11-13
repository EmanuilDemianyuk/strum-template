import { Link } from "react-scroll";

const CompanyLink = () => {
  return (
    <div>
        <h5 className="text-lg py-2 text-white">Company</h5>
        <Link
        to="about"
        smooth={true}
        duration={500}>
          <p
          className="text-white cursor-pointer"
          >Про нас</p>
        </Link>
        <Link
        to="services"
        smooth={true}
        duration={500}>
          <p
            className="text-white cursor-pointer"
          >Послуги</p>
        </Link>
        <Link
        to="blog"
        smooth={true}
        duration={500}>
          <p
            className="text-white cursor-pointer"
          >Наш блог</p>
        </Link>
        <Link
        to="contact"
        smooth={true}
        duration={500}>
          <p
            className="text-white cursor-pointer"
          >Контакти</p>
        </Link>
    </div>
  )
}

export default CompanyLink;