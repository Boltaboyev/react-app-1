function FilterBtn() {
    return (
        <div className="bg-[#f9f8f3] flex justify-start items-center border-b border-[#e8e8e8] max-[640px]:w-[100%] max-[640px]:overflow-scroll">
            <a
                className="filterBtns h-full flex justify-center items-center p-[10px_20px] relative active"
                href="#!">
                Беседки
            </a>
            <a
                className="filterBtns h-full flex justify-center items-center p-[10px_20px] relative"
                href="#!">
                Бани
            </a>
            <a
                className="filterBtns h-full flex justify-center items-center p-[10px_20px] relative"
                href="#!">
                Площадки
            </a>
            <a
                className="filterBtns h-full flex justify-center items-center p-[10px_20px] relative"
                href="#!">
                Дома
            </a>
            <a
                className="filterBtns h-full flex justify-center items-center p-[10px_20px] relative"
                href="#!">
                Перголы
            </a>
            <a
                className="filterBtns h-full flex justify-center items-center p-[10px_20px] relative"
                href="#!">
                Бренды
            </a>
        </div>
    )
}

export default FilterBtn
