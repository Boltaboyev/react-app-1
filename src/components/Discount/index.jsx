import FilterBtn from "../Filter"
import Card from "../Card"

function Discount() {
    const cards = Array(4).fill(null)

    return (
        <section className="py-[30px]">
            <div className="container2 flex flex-col gap-[20px]">
                <h1 className="text-[24px] font-[500]">Акционные модели</h1>
                <FilterBtn />
                <div className="grid grid-cols-4 max-[1175px]:grid-cols-3 max-[888px]:grid-cols-2 max-[588px]:grid-cols-1">
                    {cards.map((_, index) => (
                        <Card key={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Discount
