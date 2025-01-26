// icons
import {FaLocationDot} from "react-icons/fa6"

const Header = () => {
    return (
        <header>
            <div className="navbar-top py-[10px] bg-[#2b150d] text-[13px] text-white">
                <div className="container2 flex justify-between items-center">
                    <ul className="flex justify-between items-center gap-[30px]">
                        <li className="flex items-center gap-[5px]">
                            <FaLocationDot className="text-[#ffd634]" />
                            <a href="#!">Ваш город: Константинополь</a>
                        </li>

                        <li className="flex items-center gap-[5px]">
                            <FaLocationDot className="text-[#ffd634]" />
                            <a href="#!">Наш офис: Москва, ул.7</a>
                        </li>
                    </ul>

                    <ul className="flex justify-between items-center gap-[45px]">
                        <li>
                            <a className="hover:text-[#ffd634] transition duration-[.2s]" href="#!">Статьи</a>
                        </li>
                        <li>
                            <a className="hover:text-[#ffd634] transition duration-[.2s]" href="#!">Оплата</a>
                        </li>
                        <li>
                            <a className="hover:text-[#ffd634] transition duration-[.2s]" href="#!">Гарантия</a>
                        </li>
                        <li>
                            <a className="hover:text-[#ffd634] transition duration-[.2s]" href="#!">Дилерам</a>
                        </li>
                        <li>
                            <a className="hover:text-[#ffd634] transition duration-[.2s]" href="#!">Вакансии</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header
