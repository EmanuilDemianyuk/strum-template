import { Link } from "react-scroll";

const CompanyLink = () => {
  return (
    <div className="mt-8 lg:mt-0 flex flex-col gap-4 text-lg font-medium">
      <Link
      to="about"
      smooth={true}
      duration={500}>
        <p
          className="cursor-pointer hover:underline"
        >Про нас</p>
      </Link>
      <Link
      to="services"
      smooth={true}
      duration={500}>
        <p
          className="cursor-pointer hover:underline"
        >Послуги</p>
      </Link>
      <Link
      to="blog"
      smooth={true}
      duration={500}>
        <p
          className="cursor-pointer hover:underline"
        >Наш блог</p>
      </Link>
      <Link
      to="contact"
      smooth={true}
      duration={500}>
        <p
          className="cursor-pointer hover:underline"
        >Контакти</p>
      </Link>
    </div>
  );
}

export default CompanyLink;