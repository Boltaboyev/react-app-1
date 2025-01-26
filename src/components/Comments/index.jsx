// icon
import {IoStar} from "react-icons/io5"

function Comments() {
    return (
        <>
            <section className="py-[20px]">
                <div className="container2">
                    <h1 className="text-[25px]">Отзывы наших клиентов</h1>
                </div>
            </section>

            <section className="py-[40px] bg-[#f9f8f3]">
                <div className="container2 grid grid-cols-3 gap-[20px] max-[960px]:grid-cols-2 max-[640px]:grid-cols-1">
                    <div className="flex flex-col gap-[10px] p-[15px] rounded-md bg-[#fff] border border-[#e8e8e8] max-[960px]:hidden">
                        <div className="flex pb-[15px] border-b border-[#e8e8e8] justify-between items-center gap-[10px]">
                            <div className="flex flex-col justify-center items-start">
                                <h1 className="font-[600]">Алексей С.А.</h1>
                                <p className="text-[13px] opacity-60">
                                    28 июня 2021
                                </p>
                            </div>

                            <div className="flex flex-col gap-[3px] justify-center items-end">
                                <div className="flex gap-[3px] text-[#ffd634]">
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                </div>
                                <p className="text-[12px] opacity-60">
                                    Общая оценка: (4,8){" "}
                                </p>
                            </div>
                        </div>

                        <p className="text-[14px] leading-[140%]">
                            «Цена хорошая, все соответствует ожиданиям.
                            Подбирала перголу для своего участка. Также мне
                            хотелось бы отметить вежливость работников компании,
                            все подробно рассказали. Я считаю этот магазин
                            отличным. И наверняка буду покупать снова или
                            советовать коллегам.»
                        </p>

                        <a href="#!" className="text-[#ff7a1b] underline">
                            Читать полностью
                        </a>
                    </div>

                    <div className="flex flex-col gap-[10px] p-[15px] rounded-md bg-[#fff] border border-[#e8e8e8] max-[640px]:hidden">
                        <div className="flex pb-[15px] border-b border-[#e8e8e8] justify-between items-center gap-[10px]">
                            <div className="flex flex-col justify-center items-start">
                                <h1 className="font-[600]">Алексей С.А.</h1>
                                <p className="text-[13px] opacity-60">
                                    28 июня 2021
                                </p>
                            </div>

                            <div className="flex flex-col gap-[3px] justify-center items-end">
                                <div className="flex gap-[3px] text-[#ffd634]">
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                </div>
                                <p className="text-[12px] opacity-60">
                                    Общая оценка: (4,8){" "}
                                </p>
                            </div>
                        </div>

                        <p className="text-[14px] leading-[140%]">
                            «Цена хорошая, все соответствует ожиданиям.
                            Подбирала перголу для своего участка. Также мне
                            хотелось бы отметить вежливость работников компании,
                            все подробно рассказали. Я считаю этот магазин
                            отличным. И наверняка буду покупать снова или
                            советовать коллегам.»
                        </p>

                        <a href="#!" className="text-[#ff7a1b] underline">
                            Читать полностью
                        </a>
                    </div>

                    <div className="flex flex-col gap-[10px] p-[15px] rounded-md bg-[#fff] border border-[#e8e8e8]">
                        <div className="flex pb-[15px] border-b border-[#e8e8e8] justify-between items-center gap-[10px]">
                            <div className="flex flex-col justify-center items-start">
                                <h1 className="font-[600]">Алексей С.А.</h1>
                                <p className="text-[13px] opacity-60">
                                    28 июня 2021
                                </p>
                            </div>

                            <div className="flex flex-col gap-[3px] justify-center items-end">
                                <div className="flex gap-[3px] text-[#ffd634]">
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                </div>
                                <p className="text-[12px] opacity-60">
                                    Общая оценка: (4,8){" "}
                                </p>
                            </div>
                        </div>

                        <p className="text-[14px] leading-[140%]">
                            «Цена хорошая, все соответствует ожиданиям.
                            Подбирала перголу для своего участка. Также мне
                            хотелось бы отметить вежливость работников компании,
                            все подробно рассказали. Я считаю этот магазин
                            отличным. И наверняка буду покупать снова или
                            советовать коллегам.»
                        </p>

                        <a href="#!" className="text-[#ff7a1b] underline">
                            Читать полностью
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Comments
