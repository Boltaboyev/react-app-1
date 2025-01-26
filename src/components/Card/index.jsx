// card img
import cardImg from "../../assets/imgs/card.png"

// icons
import {IoResizeOutline} from "react-icons/io5"
import {FaRegSquare} from "react-icons/fa6"
import {FaUser} from "react-icons/fa"
import {FaCheckCircle} from "react-icons/fa"

function Card() {
    return (
        <div className="p-[5px] flex flex-col gap-[8px] group text-[14px] border border-[#e8e8e8]">
            <div className="overflow-hidden w-full h-[230px] flex justify-center items-center rounded-md">
                <img
                    src={cardImg}
                    alt=""
                    className="h-full w-full group-hover:scale-[1.1] transition duration-[.6s] object-cover"
                />
            </div>

            <div className="flex justify-between items-center opacity-50">
                <small>Артикул: </small>
                <small>0000001</small>
            </div>

            <h1 className="text-[15px] leading-[120%] font-[600]">
                Название товара длинное в две строки наверное
            </h1>

            <div className="flex flex-col gap-[8px]">
                <div className="flex items-center">
                    <span className="flex-shrink-0 flex justify-center items-center gap-[5px]">
                        <IoResizeOutline className="text-[#ff7a1b]" /> Размеры:
                    </span>
                    <span className="flex-grow border-dotted border-b border-gray-300 mx-2"></span>
                    <span className="flex-shrink-0">12.3 x 14.6 x 4.3 м.</span>
                </div>
                <div className="flex items-center">
                    <span className="flex-shrink-0 flex justify-center items-center gap-[5px]">
                        <FaRegSquare className="text-[#ff7a1b]" /> Площадь:
                    </span>
                    <span className="flex-grow border-dotted border-b border-gray-300 mx-2"></span>
                    <span className="flex-shrink-0">33 м²</span>
                </div>
                <div className="flex items-center">
                    <span className="flex-shrink-0 flex justify-center items-center gap-[5px]">
                        <FaUser className="text-[#ff7a1b]" /> Вместимость:
                    </span>
                    <span className="flex-grow border-dotted border-b border-gray-300 mx-2"></span>
                    <span className="flex-shrink-0">15 чел.</span>
                </div>
                <div className="flex items-center">
                    <span className="flex-shrink-0 flex justify-center items-center gap-[5px]">
                        <FaCheckCircle className="text-[#ff7a1b]" /> Гарантия:
                    </span>
                    <span className="flex-grow border-dotted border-b border-gray-300 mx-2"></span>
                    <span className="flex-shrink-0">10 лет</span>
                </div>
            </div>

            <div className="flex justify-between items-center gap-[10px]">
                <div className="flex flex-col">
                    <div className="flex justify-start items-center gap-[9px]">
                        <span className="text-[#bbb] line-through">
                            6 127 500 ₽
                        </span>
                        <span className="bg-[#ffd634] px-[2px] rounded-[2px] text-[12px]">
                            -25%
                        </span>
                    </div>
                    <h4 className="text-[16px] font-[600]">5 023 900 ₽</h4>
                </div>

                <button className="bg-[#ffd634] p-[10px_40px] rounded-md cursor-pointer active:scale-[.98] hover:bg-[#ff7a1b] transition duration-[.2s]">
                    Купить
                </button>
            </div>
        </div>
    )
}

export default Card
