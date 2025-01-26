// img
import card1 from "../../assets/imgs/category/1.png"
import card2 from "../../assets/imgs/category/2.png"
import card3 from "../../assets/imgs/category/3.png"
import card4 from "../../assets/imgs/category/4.png"
import card5 from "../../assets/imgs/category/5.png"
import card6 from "../../assets/imgs/category/6.png"

function Category() {
    return (
        <section className="py-[20px]">
            <div className="container2 flex flex-col gap-[20px]">
                <h1 className="text-[26px] font-[500]">Категории</h1>

                <div className="grid grid-cols-3 gap-[20px] max-[1325px]:grid-cols-2 max-[840px]:hidden">
                    {/* 1 */}
                    <div className="bg-[#fff7d9] p-[20px] rounded-xl flex flex-col justify-between items-start gap-[30px]">
                        <div>
                            <h2 className="text-[18px] font-[500] mb-[6px]">
                                Беседки
                            </h2>
                            <ul className="grid grid-cols-2 gap-[2px_30px] text-[14px] max-[865px]:hidden">
                                <li>Подкатегория 1</li>
                                <li>Подкатегория 2</li>
                                <li>Подкатегория 3</li>
                                <li>Подкатегория 4</li>
                                <li>Подкатегория 5</li>
                                <li>Подкатегория 6</li>
                            </ul>
                        </div>

                        <img className="self-center" src={card1} alt="" />
                    </div>

                    {/* 2 */}
                    <div className="flex flex-col justify-between gap-[10px]">
                        <div className="flex justify-between items-center gap-[10px] p-[20px] rounded-xl bg-[#fff7d9]">
                            <div>
                                <h2 className="text-[18px] font-[500] mb-[6px]">
                                    Бани
                                </h2>
                                <ul className="text-[14px] max-[865px]:hidden">
                                    <li>Подкатегория 1</li>
                                    <li>Подкатегория 2</li>
                                </ul>
                            </div>

                            <img
                                src={card2}
                                alt=""
                                className="object-contain"
                            />
                        </div>

                        <div className="flex justify-between items-center gap-[10px] p-[20px] rounded-xl bg-[#fff7d9]">
                            <div>
                                <h2 className="text-[18px] font-[500] mb-[6px]">
                                    Перголы
                                </h2>
                                <ul className="text-[14px] max-[865px]:hidden">
                                    <li>Подкатегория 1</li>
                                    <li>Подкатегория 2</li>
                                </ul>
                            </div>

                            <img
                                src={card3}
                                alt=""
                                className="object-contain"
                            />
                        </div>

                        <div className="flex justify-between items-center gap-[10px] p-[20px] rounded-xl bg-[#fff7d9]">
                            <div>
                                <h2 className="text-[18px] font-[500] mb-[6px]">
                                    Бренды
                                </h2>
                                <ul className="text-[14px] max-[865px]:hidden">
                                    <li>Подкатегория 1</li>
                                    <li>Подкатегория 2</li>
                                </ul>
                            </div>

                            <img
                                src={card4}
                                alt=""
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* 3 */}
                    <div className="flex flex-col justify-between gap-[10px] max-[1325px]:flex-row max-[1325px]:col-span-2">
                        <div className="flex justify-between items-center h-full w-full gap-[10px] p-[20px] rounded-xl bg-[#fff7d9]">
                            <div>
                                <h2 className="text-[18px] font-[500] mb-[6px]">
                                    Детские площадки
                                </h2>
                                <ul className="text-[14px] max-[865px]:hidden">
                                    <li>Подкатегория 1</li>
                                    <li>Подкатегория 2</li>
                                    <li>Подкатегория 3</li>
                                </ul>
                            </div>

                            <img
                                src={card5}
                                alt=""
                                className="object-contain"
                            />
                        </div>

                        <div className="flex justify-between items-center h-full w-full gap-[10px] p-[20px] rounded-xl bg-[#fff7d9]">
                            <div>
                                <h2 className="text-[18px] font-[500] mb-[6px]">
                                    Дома
                                </h2>
                                <ul className="text-[14px] max-[865px]:hidden">
                                    <li>Подкатегория 1</li>
                                    <li>Подкатегория 2</li>
                                    <li>Подкатегория 3</li>
                                </ul>
                            </div>

                            <img
                                src={card6}
                                alt=""
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid-cols-2 gap-[20px] hidden max-[840px]:grid max-[450px]:gap-[14px]">
                    {/* 1 */}
                    <div className="bg-[#f9f8f3] px-[10px] rounded-md flex justify-between items-center gap-[10px]">
                        <p>Беседки</p>
                        <img
                            className="h-[100px] w-[100px] object-contain max-[450px]:w-[80px] max-[450px]:h-[80px]"
                            src={card1}
                            alt=""
                        />
                    </div>

                    {/* 2 */}
                    <div className="bg-[#f9f8f3] px-[10px] rounded-md flex justify-between items-center gap-[10px]">
                        <p>Беседки</p>
                        <img
                            className="h-[100px] w-[100px] object-contain max-[450px]:w-[80px] max-[450px]:h-[80px]"
                            src={card2}
                            alt=""
                        />
                    </div>

                    {/* 3 */}
                    <div className="bg-[#f9f8f3] px-[10px] rounded-md flex justify-between items-center gap-[10px]">
                        <p>Беседки</p>
                        <img
                            className="h-[100px] w-[100px] object-contain max-[450px]:w-[80px] max-[450px]:h-[80px]"
                            src={card3}
                            alt=""
                        />
                    </div>

                    {/* 4 */}
                    <div className="bg-[#f9f8f3] px-[10px] rounded-md flex justify-between items-center gap-[10px]">
                        <p>Беседки</p>
                        <img
                            className="h-[100px] w-[100px] object-contain max-[450px]:w-[80px] max-[450px]:h-[80px]"
                            src={card4}
                            alt=""
                        />
                    </div>

                    {/* 5 */}
                    <div className="bg-[#f9f8f3] px-[10px] rounded-md flex justify-between items-center gap-[10px]">
                        <p>Беседки</p>
                        <img
                            className="h-[100px] w-[100px] object-contain max-[450px]:w-[80px] max-[450px]:h-[80px]"
                            src={card4}
                            alt=""
                        />
                    </div>

                    {/* 6 */}
                    <div className="bg-[#f9f8f3] px-[10px] rounded-md flex justify-between items-center gap-[10px]">
                        <p>Беседки</p>
                        <img
                            className="h-[100px] w-[100px] object-contain max-[450px]:w-[80px] max-[450px]:h-[80px]"
                            src={card6}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Category
