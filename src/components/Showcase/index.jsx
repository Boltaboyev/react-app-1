import bgImg from "../../assets/imgs/showcase/showcase.png"
import service1 from "../../assets/imgs/showcase/1.png"
import service2 from "../../assets/imgs/showcase/2.png"
import service3 from "../../assets/imgs/showcase/3.png"
import service4 from "../../assets/imgs/showcase/4.png"
import service5 from "../../assets/imgs/showcase/5.png"

function Showcase() {
    return (
        <section className="py-[20px]">
            <div className="container2">
                <div
                    className="w-full flex flex-col gap-[20px] justify-between items-start p-[20px] h-[300px] bg-cover bg-center"
                    style={{backgroundImage: `url(${bgImg})`}}>
                    <h1 className="text-[45px] leading-[120%] max-[550px]:text-[30px] max-[550px]:text-center font-[700] text-[#fff]">
                        Беседки под ключ <br className="max-[550px]:hidden" />{" "}
                        за 7 дней
                    </h1>

                    <div className="flex justify-start items-center mb-[35px] max-[550px]:justify-center w-full gap-[40px] text-[14px] text-[white]">
                        <p>Выгода до 24%</p>
                        <p>Сборка за 1 день</p>
                    </div>
                </div>

                <div className="grid grid-cols-5 gap-[20px] max-[1240px]:grid-cols-3 max-[740px]:grid-cols-2">
                    <div className="flex justify-start items-center gap-[10px] max-[445px]:flex-col max-[445px]:justify-center max-[445px]:text-center max-[445px]:gap-[5px]">
                        <img src={service1} alt="" />
                        <p>Изготовливаем конструкции</p>
                    </div>

                    <div className="flex justify-start items-center gap-[10px] max-[740px]:hidden">
                        <img src={service2} alt="" />
                        <p>Изготовили 400 деревянных </p>
                    </div>

                    <div className="flex justify-start items-center gap-[10px] max-[445px]:flex-col max-[445px]:justify-center max-[445px]:text-center max-[445px]:gap-[5px]">
                        <img src={service3} alt="" />
                        <p>Собственное производство</p>
                    </div>

                    <div className="flex justify-start items-center gap-[10px] max-[445px]:flex-col max-[445px]:justify-center max-[445px]:text-center max-[445px]:gap-[5px]">
                        <img src={service4} alt="" />
                        <p>Производим дерева</p>
                    </div>

                    <div className="flex justify-start items-center gap-[10px] max-[445px]:flex-col max-[445px]:justify-center max-[445px]:text-center max-[445px]:gap-[5px]">
                        <img src={service5} alt="" />
                        <p>Гарантия все конструкции</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Showcase
