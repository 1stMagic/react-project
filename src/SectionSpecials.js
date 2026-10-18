import BoxSpecial from "./BoxSpecial.js"

// Static data for this week's specials
const specials = [
    {
        "imageSrc": "/images/greek-salad.jpg",
        "name": "Greek salad",
        "price": "$12.99",
        "description": "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
    },
    {
        "imageSrc": "/images/bruschetta.jpg",
        "name": "Bruschetta",
        "price": "$5.99",
        "description": "Our Bruschetta is made from grilled bread that has bean smeared with garlic and seasoned with salt and olive oil, garlic and rosemary croutons."
    },
    {
        "imageSrc": "/images/rigatoni.jpg",
        "name": "Rigatoni",
        "price": "$11.49",
        "description": "This is our signature dish, made with Italian rigatoni pasta, tomato sauce, and a blend of cheeses, topped with fresh basil and a drizzle of olive oil."
    }
]

// Specials section: heading, menu button and a card per special
function SectionSpecials() {
    return (
        <section id="section-specials" className="flex-container flex-column default-gap">
            <div className="flex-container items-center justify-between">
                <h2>This week specials</h2>
                <button type="submit" className="flex-none">
                    Online Menu
                </button>
            </div>
            <div className="specials">
                {specials.map((special, index) => (
                    <BoxSpecial key={index} special={special} />
                ))}
            </div>
        </section>
    )
}

export default SectionSpecials