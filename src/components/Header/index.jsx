// icons
import {FaLocationDot} from "react-icons/fa6"
import {FaCheck} from "react-icons/fa"
import {GoClock} from "react-icons/go"
import {IoIosMail} from "react-icons/io"
import {IoMenu} from "react-icons/io5"
import {BsTelephone} from "react-icons/bs"

const Header = () => {
    return (
        <header>
            <div className="navbar-top py-[10px] bg-[#2b150d] text-[13px] text-white max-[930px]:hidden">
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
                            <a
                                className="hover:text-[#ffd634] transition duration-[.2s]"
                                href="#!">
                                Статьи
                            </a>
                        </li>
                        <li>
                            <a
                                className="hover:text-[#ffd634] transition duration-[.2s]"
                                href="#!">
                                Оплата
                            </a>
                        </li>
                        <li>
                            <a
                                className="hover:text-[#ffd634] transition duration-[.2s]"
                                href="#!">
                                Гарантия
                            </a>
                        </li>
                        <li>
                            <a
                                className="hover:text-[#ffd634] transition duration-[.2s]"
                                href="#!">
                                Дилерам
                            </a>
                        </li>
                        <li>
                            <a
                                className="hover:text-[#ffd634] transition duration-[.2s]"
                                href="#!">
                                Вакансии
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="navbar-middle py-[15px] bg-[#f9f8f3] max-[910px]:bg-[#2b150d]">
                <div className="container2 flex justify-between items-center gap-[10px]">
                    <button className="hidden max-[910px]:block">
                        <IoMenu className="text-white text-[40px]" />
                    </button>

                    <div className="flex items-center gap-[10px] max-[910px]:hidden">
                        <span className="h-[30px] w-[30px] rounded-[8px] bg-[#ff7a1b]"></span>
                        <span className="h-[30px] w-[30px] rounded-[8px] bg-[#2b150d]"></span>
                        <span className="h-[30px] w-[30px] rounded-[8px] bg-[#ffd634]"></span>
                    </div>

                    <input
                        type="text"
                        placeholder="Поиск по каталогу..."
                        className="hidden max-[470px]:block bg-[white] text-gray-700 placeholder-gray-400 outline-none p-[6px] rounded-md"
                    />

                    <div className="flex flex-col items-center justify-center gap-[5px] max-[470px]:hidden">
                        <div className="w-full flex justify-between items-center gap-[10px] text-[12px] font-[500] max-[910px]:hidden">
                            <p className="flex justify-center items-center gap-[5px]">
                                <FaCheck className="text-[#ffd634]" />
                                Лучшие цены
                            </p>

                            <p className="flex justify-center items-center gap-[5px]">
                                <FaCheck className="text-[#ffd634]" />
                                Бесплатная доставка
                            </p>

                            <p className="flex justify-center items-center gap-[5px]">
                                <FaCheck className="text-[#ffd634]" />
                                Гарантия от 3х лет
                            </p>

                            <p className="flex justify-center items-center gap-[5px]">
                                <FaCheck className="text-[#ffd634]" />
                                Более 1 000 товаров
                            </p>
                        </div>

                        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden w-full max-[910px]:bg-[white]">
                            <input
                                type="text"
                                placeholder="Поиск по каталогу..."
                                className="flex-grow px-4 py-2 text-gray-700 placeholder-gray-400 focus:outline-none"
                            />
                            <div className="relative">
                                <button className="bg-[#ffd634]  text-black font-medium px-6 py-2 relative z-10">
                                    Найти
                                </button>
                                <div className="absolute -left-2 top-0 bottom-0 w-4 bg-[#ffd634] transform -skew-x-12 z-0"></div>
                            </div>
                        </div>
                    </div>

                    <button className="hidden max-[910px]:block">
                        <BsTelephone className="text-white text-[30px]" />
                    </button>

                    <div className="flex flex-col items-end justify-between text-[15px] max-[910px]:hidden">
                        <p className="flex items-center gap-[5px]">
                            <GoClock className="text-[#ffd634]" /> 24/7 с 9:00
                            до 21:00
                        </p>
                        <p>
                            8 (800)
                            <span className="font-[700]"> 800-00-00</span>
                        </p>
                        <p>
                            8 (430)
                            <span className="font-[700]"> 700-00-00</span>
                        </p>
                    </div>

                    <div className="flex flex-col gap-[5px] max-[1150px]:hidden">
                        <p className="flex items-center gap-[5px]">
                            <IoIosMail className="text-[#ffd634]" />
                            youremail@mailbox.ru
                        </p>

                        <button className="p-[10px_20px] rounded-[10px] text-white bg-[#ff7a1b] hover:bg-[#ff3838] transition duration-[.2s] cursor-pointer active:scale-[.98]">
                            Заказать звонок
                        </button>
                    </div>
                </div>
            </div>

            <div className="navbar-bottom h-[40px] flex justify-center items-center bg-[#fff] text-[14px] font-[500] border-t border-b border-[#e8e8e8] max-[910px]:hidden">
                <div className="container2 flex justify-between h-full items-center gap-[10px]">
                    <button className="flex justify-center items-center gap-[5px] bg-[#ffd634] h-full px-[10px] cursor-pointer">
                        <IoMenu className="text-white text-[24px]"/>
                        Каталог товаров
                    </button>
                    <a href="#!">О компании</a>
                    <a href="#!">Отзывы</a>
                    <a href="#!">Наши работы</a>
                    <a href="#!">Доставка</a>
                    <a href="#!">Контакты</a>
                </div>
            </div>
        </header>
    )
}

export default Header
