import BoxSpecial from "./BoxSpecial.js"

const specials = [
    {
        "imageSrc": null,
        "name": "Greek salad",
        "price": "$12.99",
        "description": "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
    },
    {
        "imageSrc": null,
        "name": "Bruschetta",
        "price": "$5.99",
        "description": "Our Bruschetta is made from grilled bread that has bean smeared with garlic and seasoned with salt and olive oil, garlic and rosemary croutons."
    },
    {
        "imageSrc": null,
        "name": "Lemon Dessert",
        "price": "$5.00",
        "description": "This comes straigh from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
    }
]

function SectionSpecials() {
    return (
        <section>
            <div className="flex-container justify-between">
                <h2>This week specials</h2>
                <button type="submit" className="flex-none">
                    Online Menu
                </button>
            </div>
            <div className="flex-container default-gap">
                {specials.map((special, index) => (
                    <BoxSpecial key={index} special={special} />
                ))}
            </div>
        </section>
    )
}

export default SectionSpecials