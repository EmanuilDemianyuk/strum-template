import { Link } from "react-scroll";

const  NavLink = ( { reverse = false }: { reverse?: boolean } ) => {
    const options = reverse 
                    ? "flex flex-col gap-8 font-medium pt-2 pb-10"
                    : "flex gap-4 font-medium md:gap-8"
  return (
    <nav>
        <ul className={options}>
            <li 
            className="cursor-pointer duration-300 hover:underline hover:text-yellow-100 active:text-BrandYellow">
                <Link
                to="about"
                smooth={true}
                duration={500}
                >
                    Про нас
                </Link>
            </li>
            <li 
            className="cursor-pointer duration-300 hover:underline hover:text-yellow-100 active:text-BrandYellow">
                <Link
                to="services"
                smooth={true}
                duration={500}
                >
                    Послуги
                </Link>
            </li>
            <li 
            className="cursor-pointer duration-300 hover:underline hover:text-yellow-100 active:text-BrandYellow">
                <Link
                to="blog"
                smooth={true}
                duration={500}
                >
                   Наш блог
                </Link>
            </li>
            <li 
            className="cursor-pointer duration-300 hover:underline hover:text-yellow-100 active:text-BrandYellow">
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

export default NavLink;