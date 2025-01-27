// img
import card1 from "../../assets/imgs/news/1.png"
import card2 from "../../assets/imgs/news/2.png"
import card3 from "../../assets/imgs/news/3.png"
import card4 from "../../assets/imgs/news/4.png"
import card5 from "../../assets/imgs/news/5.png"
import card6 from "../../assets/imgs/news/6.png"

function News() {
    return (
        <section className="py-[20px]">
            <div className="container2 flex flex-col gap-[15px]">
                <h1 className="text-[25px]">Статьи, новости и обзоры</h1>

                <div className="grid grid-cols-3 gap-[30px] max-[970px]:grid-cols-2 max-[600px]:grid-cols-1">
                    {/* 1 */}
                    <div className="flex flex-col gap-[3px] group">
                        <div className="flex justify-center items-center overflow-hidden h-[230px] max-[400px]:h-[160px] w-full rounded-md">
                            <img
                                src={card1}
                                alt=""
                                className="h-full w-full object-cover group-hover:scale-[1.1] transition duration-[.6s]"
                            />
                        </div>

                        <h1 className="font-[600] text-[#ff7a1b]">
                            Как выбрать беседку для дачи
                        </h1>
                        <small className="text-[#bbb]">19 сентября 2021</small>

                        <p className="text-[14px] font-[500] leading-[150%] opacity-80">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ornare felis faucibus turpis justo, ipsum sed
                            sit. Nisl mauris adipiscing congue tortor bibendum
                            condimentum sociis lorem. Nibh ut ornare nec est
                            pharetra, tortor egestas quam non
                        </p>
                        <a
                            href="#!"
                            className="text-[#ff7a1b] underline text-[14px] font-bold">
                            Читать далее >
                        </a>
                    </div>

                    {/* 2 */}
                    <div className="flex flex-col gap-[3px] group">
                        <div className="flex justify-center items-center overflow-hidden h-[230px] max-[400px]:h-[160px] w-full rounded-md">
                            <img
                                src={card2}
                                alt=""
                                className="h-full w-full object-cover group-hover:scale-[1.1] transition duration-[.6s]"
                            />
                        </div>

                        <h1 className="font-[600] text-[#ff7a1b]">
                            Как выбрать беседку для дачи
                        </h1>
                        <small className="text-[#bbb]">19 сентября 2021</small>

                        <p className="text-[14px] font-[500] leading-[150%] opacity-80">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ornare felis faucibus turpis justo, ipsum sed
                            sit. Nisl mauris adipiscing congue tortor bibendum
                            condimentum sociis lorem. Nibh ut ornare nec est
                            pharetra, tortor egestas quam non
                        </p>
                        <a
                            href="#!"
                            className="text-[#ff7a1b] underline text-[14px] font-bold">
                            Читать далее >
                        </a>
                    </div>

                    {/* 3 */}
                    <div className="flex flex-col gap-[3px] group">
                        <div className="flex justify-center items-center overflow-hidden h-[230px] max-[400px]:h-[160px] w-full rounded-md">
                            <img
                                src={card3}
                                alt=""
                                className="h-full w-full object-cover group-hover:scale-[1.1] transition duration-[.6s]"
                            />
                        </div>

                        <h1 className="font-[600] text-[#ff7a1b]">
                            Как выбрать беседку для дачи
                        </h1>
                        <small className="text-[#bbb]">19 сентября 2021</small>

                        <p className="text-[14px] font-[500] leading-[150%] opacity-80">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ornare felis faucibus turpis justo, ipsum sed
                            sit. Nisl mauris adipiscing congue tortor bibendum
                            condimentum sociis lorem. Nibh ut ornare nec est
                            pharetra, tortor egestas quam non
                        </p>
                        <a
                            href="#!"
                            className="text-[#ff7a1b] underline text-[14px] font-bold">
                            Читать далее >
                        </a>
                    </div>

                    {/* 4 */}
                    <div className="flex flex-col gap-[3px] group max-[600px]:hidden">
                        <div className="flex justify-center items-center overflow-hidden h-[230px] max-[400px]:h-[160px] w-full rounded-md">
                            <img
                                src={card4}
                                alt=""
                                className="h-full w-full object-cover group-hover:scale-[1.1] transition duration-[.6s]"
                            />
                        </div>

                        <h1 className="font-[600] text-[#ff7a1b]">
                            Как выбрать беседку для дачи
                        </h1>
                        <small className="text-[#bbb]">19 сентября 2021</small>

                        <p className="text-[14px] font-[500] leading-[150%] opacity-80">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ornare felis faucibus turpis justo, ipsum sed
                            sit. Nisl mauris adipiscing congue tortor bibendum
                            condimentum sociis lorem. Nibh ut ornare nec est
                            pharetra, tortor egestas quam non
                        </p>
                        <a
                            href="#!"
                            className="text-[#ff7a1b] underline text-[14px] font-bold">
                            Читать далее >
                        </a>
                    </div>

                    {/* 5 */}
                    <div className="flex flex-col gap-[3px] group max-[600px]:hidden">
                        <div className="flex justify-center items-center overflow-hidden h-[230px] max-[400px]:h-[160px] w-full rounded-md">
                            <img
                                src={card5}
                                alt=""
                                className="h-full w-full object-cover group-hover:scale-[1.1] transition duration-[.6s]"
                            />
                        </div>

                        <h1 className="font-[600] text-[#ff7a1b]">
                            Как выбрать беседку для дачи
                        </h1>
                        <small className="text-[#bbb]">19 сентября 2021</small>

                        <p className="text-[14px] font-[500] leading-[150%] opacity-80">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ornare felis faucibus turpis justo, ipsum sed
                            sit. Nisl mauris adipiscing congue tortor bibendum
                            condimentum sociis lorem. Nibh ut ornare nec est
                            pharetra, tortor egestas quam non
                        </p>
                        <a
                            href="#!"
                            className="text-[#ff7a1b] underline text-[14px] font-bold">
                            Читать далее >
                        </a>
                    </div>

                    {/* 6 */}
                    <div className="flex flex-col gap-[3px] group max-[600px]:hidden">
                        <div className="flex justify-center items-center overflow-hidden h-[230px] max-[400px]:h-[160px] w-full rounded-md">
                            <img
                                src={card6}
                                alt=""
                                className="h-full w-full object-cover group-hover:scale-[1.1] transition duration-[.6s]"
                            />
                        </div>

                        <h1 className="font-[600] text-[#ff7a1b]">
                            Как выбрать беседку для дачи
                        </h1>
                        <small className="text-[#bbb]">19 сентября 2021</small>

                        <p className="text-[14px] font-[500] leading-[150%] opacity-80">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ornare felis faucibus turpis justo, ipsum sed
                            sit. Nisl mauris adipiscing congue tortor bibendum
                            condimentum sociis lorem. Nibh ut ornare nec est
                            pharetra, tortor egestas quam non
                        </p>
                        <a
                            href="#!"
                            className="text-[#ff7a1b] underline text-[14px] font-bold">
                            Читать далее >
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default News
