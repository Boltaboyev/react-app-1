import {FaWhatsapp} from "react-icons/fa"
import {AiOutlineYoutube} from "react-icons/ai"
import {IoLogoInstagram} from "react-icons/io5"
import {RiVisaLine} from "react-icons/ri"
import {FaCcMastercard} from "react-icons/fa"
import {LiaCcJcb} from "react-icons/lia"
import {SiNubank} from "react-icons/si"

function Footer() {
    return (
        <footer className="pt-[30px] bg-[#1f1f1f]">
            <div className="container2 flex flex-col">
                <div className="flex justify-between items-center gap-[20px] pb-[15px] border-b border-[#e8e8e8]">
                    <div className="flex items-center gap-[10px]">
                        <span className="h-[30px] w-[30px] rounded-[8px] bg-[#ff7a1b]"></span>
                        <span className="h-[30px] w-[30px] rounded-[8px] bg-[#fff]"></span>
                        <span className="h-[30px] w-[30px] rounded-[8px] bg-[#ffd634]"></span>
                    </div>

                    <div className="flex flex-col text-[14px] text-[#fff] max-[1080px]:hidden">
                        <p>Наш адрес:</p>
                        <p>Москва, ул. Новокосимская д.7</p>
                    </div>

                    <div className="flex flex-col text-[14px] text-[#fff] max-[1080px]:hidden">
                        <p>График работы: </p>
                        <p>
                            Ежедневно с{" "}
                            <span className="text-[#ff7a1b]">9:00</span> до{" "}
                            <span className="text-[#ff7a1b]">21:00</span>
                        </p>
                    </div>

                    <button className="p-[15px_30px] rounded-md text-white bg-[#ff7a1b] cursor-pointer max-[1080px]:hidden">
                        Заказать звонок
                    </button>
                </div>

                <div className="flex justify-between items-center gap-[20px] py-[15px] border-b border-[#e8e8e8] max-[450px]:flex-col max-[450px]:justify-start max-[450px]:items-start">
                    <div className="grid grid-cols-3 gap-[40px] max-[1080px]:grid-cols-1">
                        <ul className="flex flex-col gap-[4px] text-[14px]">
                            <h1 className="text-[#fff]">Для покупателей:</h1>
                            <li>
                                <a className="text-[#fff] opacity-60" href="#!">
                                    Доставка
                                </a>
                            </li>
                            <li>
                                <a className="text-[#fff] opacity-60" href="#!">
                                    Гарантия
                                </a>
                            </li>
                            <li>
                                <a className="text-[#fff] opacity-60" href="#!">
                                    Политика
                                </a>
                            </li>
                            <li>
                                <a className="text-[#fff] opacity-60" href="#!">
                                    конфиденциальности
                                </a>
                            </li>
                            <li>
                                <a className="text-[#fff] opacity-60" href="#!">
                                    Отзывы
                                </a>
                            </li>
                        </ul>

                        <ul className="flex flex-col gap-[4px] text-[14px]">
                            <h1 className="text-[#fff]">О компании:</h1>
                            <li>
                                <a className="text-[#fff] opacity-60" href="#!">
                                    О Нас
                                </a>
                            </li>
                            <li>
                                <a className="text-[#fff] opacity-60" href="#!">
                                    Доставка и оплата
                                </a>
                            </li>
                            <li>
                                <a className="text-[#fff] opacity-60" href="#!">
                                    Наши работы
                                </a>
                            </li>
                            <li>
                                <a className="text-[#fff] opacity-60" href="#!">
                                    Контакты
                                </a>
                            </li>
                            <li>
                                <a className="text-[#fff] opacity-60" href="#!">
                                    Гарантия
                                </a>
                            </li>
                        </ul>

                        <ul className="flex flex-col gap-[4px] text-[14px]">
                            <h1 className="text-[#fff]">Категории:</h1>
                            <li>
                                <a className="text-[#fff] opacity-60" href="#!">
                                    Беседки
                                </a>
                            </li>
                            <li>
                                <a className="text-[#fff] opacity-60" href="#!">
                                    Бани
                                </a>
                            </li>
                            <li>
                                <a className="text-[#fff] opacity-60" href="#!">
                                    Площадки
                                </a>
                            </li>
                            <li>
                                <a className="text-[#fff] opacity-60" href="#!">
                                    Дома
                                </a>
                            </li>
                            <li>
                                <a className="text-[#fff] opacity-60" href="#!">
                                    Перголы
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-[40px] text-white max-[1080px]:grid-cols-1">
                        <div className="flex flex-col gap-[3px]">
                            <p>Для регионов</p>
                            <h1 className="font-[600] text-white">
                                8 (800){" "}
                                <span className="text-[#ff7a1b]">
                                    800-00-00
                                </span>
                            </h1>

                            <p>Email: youremail@mailbox.ru</p>

                            <div className="flex flex-col">
                                <p>Мы в соц.сетях:</p>
                                <div className="flex justify-start items-center gap-[5px]">
                                    <button className="h-[30px] w-[30px] rounded-full border border-white flex justify-center items-center cursor-pointer hover:text-[#ff7a1b] hover:border-[#ff7a1b]">
                                        <FaWhatsapp />
                                    </button>

                                    <button className="h-[30px] w-[30px] rounded-full border border-white flex justify-center items-center cursor-pointer hover:text-[#ff7a1b] hover:border-[#ff7a1b]">
                                        <AiOutlineYoutube />
                                    </button>

                                    <button className="h-[30px] w-[30px] rounded-full border border-white flex justify-center items-center cursor-pointer hover:text-[#ff7a1b] hover:border-[#ff7a1b]">
                                        <IoLogoInstagram />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-[3px]">
                            <p>Для Москвы</p>
                            <h1 className="font-[600] text-white">
                                8 (495){" "}
                                <span className="text-[#ff7a1b]">
                                    700-00-00
                                </span>
                            </h1>

                            <p>Сообщить об ошибке на сайте</p>

                            <div className="flex flex-col text-[13px]">
                                <p>ООО "Фаза Групп"</p>
                                <p>ИНН: 7751140879</p>
                                <p>ОГРН: 1187746273461</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center gap-[20px] py-[15px] text-white max-[585px]:flex-col max-[585px]:justify-start max-[585px]:items-start">
                    <div className="flex flex-col text-[13px] font-[400] opacity-60">
                        <p>Публичная оферта</p>
                        <p>2013-2021 - Товары для дач,</p>
                        <p>деревянные конструкции под любые нужды</p>
                    </div>

                    <div className="flex justify-end items-center gap-[15px] text-[50px] opacity-60">
                        <RiVisaLine className="cursor-pointer" />
                        <FaCcMastercard className="cursor-pointer text-[40px]" />
                        <LiaCcJcb className="cursor-pointer" />
                        <SiNubank className="cursor-pointer" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
