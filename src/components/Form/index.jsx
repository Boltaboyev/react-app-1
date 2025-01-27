function Form() {
    return (
        <section className="py-[30px] bg-[#f9f8f3]">
            <div className="container2 flex justify-between items-center gap-[10px] max-[950px]:flex-col max-[950px]:w-full ">
                <h1 className=" font-[600] max-[950px]:text-center">
                    Хотите быть в курсе выгодных предложений, акций и новинок?
                </h1>

                <input
                    type="text"
                    placeholder="Имя"
                    className="border border-[#e8e8e8] rounded-[8px] bg-[#fff] p-[10px] outline-none max-[950px]:w-full"
                />

                <input
                    type="text"
                    placeholder="Email"
                    className="border border-[#e8e8e8] rounded-[8px] bg-[#fff] p-[10px] outline-none max-[950px]:w-full"
                />

                <button className="rounded-[8px] bg-[#ff7a1b] p-[10px_30px] text-white outline-none cursor-pointer max-[950px]:w-full">
                    Подписаться
                </button>
            </div>
        </section>
    )
}

export default Form
