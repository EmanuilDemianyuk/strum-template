import { Link } from "react-scroll";

const NavMenu = () => {
  return (
    <nav>
        <ul className="flex gap-8 font-medium">
            <li className="cursor-pointer hover:underline">
                <Link
                to="about"
                smooth={true}
                duration={500}
                >
                    Про нас
                </Link>
            </li>
            <li className="cursor-pointer hover:underline">
                <Link
                to="services"
                smooth={true}
                duration={500}
                >
                    Послуги
                </Link>
            </li>
            <li className="cursor-pointer hover:underline">
                <Link
                to="blog"
                smooth={true}
                duration={500}
                >
                   Наш блог
                </Link>
            </li>
            <li className="cursor-pointer hover:underline">
                <Link
                to="contact"
                smooth={true}
                duration={500}
                >
                    Контакти
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavMenu;