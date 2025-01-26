// icon
import {FaQuoteLeft} from "react-icons/fa"

// img
import aboutImg from "../../assets/imgs/about.png"

function About() {
    return (
        <section className="py-[25px]">
            <div className="container2 grid grid-cols-2 gap-[20px] max-[1000px]:flex max-[1000px]:flex-col-reverse">
                <div className="flex flex-col gap-[15px]">
                    <h1 className="text-[20px] pb-[10px] border-b border-[#ff7a1b] max-[1000px]:hidden">
                        Немного о нас
                    </h1>

                    <p className="text-[14px] font-[300] opacity-80 leading-[140%] w-[85%] max-[1000px]:hidden">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        At lacus integer nunc, ornare ipsum lorem nulla est.
                        Augue eros adipiscing nec senectus duis nibh. In
                        faucibus adipiscing tellus enim, consequat integer
                        accumsan. Ultrices ipsum nulla consequat malesuada enim
                        mollis est.
                    </p>

                    <div className="flex gap-[10px]">
                        <FaQuoteLeft className="text-[#ff7a1b] text-[90px] w-fit h-fit" />

                        <div className="flex flex-col gap-[10px]">
                            <p className="leading-[140%] text-[15px]">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. At lacus integer nunc, ornare
                                ipsum lorem nulla est. Augue eros adipiscing nec
                                senectus duis nibh. In faucibus adipiscing
                                tellus enim, consequat integer accumsan.
                                Ultrices ipsum nulla consequat malesuada enim
                                mollis est. Venenatis, sagittis, amet ornare
                                donec purus suscipit nam sodales. Varius sit
                                amet nullam dictumst massa consequat odio
                                faucibus.
                            </p>

                            <p className="text-[14px] opacity-60">
                                Никита Данилов, Руководитель компании
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center">
                    <img
                        src={aboutImg}
                        alt=""
                        className="h-full w-full object-contain"
                    />
                </div>

                <h1 className="text-[25px] font-[600] text-center hidden max-[1000px]:block">Немного о нас</h1>
            </div>
        </section>
    )
}

export default About
