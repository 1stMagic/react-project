import BoxTestimonial from "./BoxTestimonial.js"

const testimonials = [
    {
        rating: 4,
        imageSrc: "",
        name: "Marc J.",
        reviewText: "Very delicious food."
    },
    {
        rating: 5,
        imageSrc: "",
        name: "Julia M.",
        reviewText: "Best restaurant in town."
    },
    {
        rating: 4,
        imageSrc: "",
        name: "John K.",
        reviewText: "Love to order online."
    },
    {
        rating: 5,
        imageSrc: "",
        name: "Sandra F.",
        reviewText: "So good. Will return."
    }
]

function SectionCustomersSay() {
    return (
        <section>
            <h2>Testimonials</h2>
            <div className="flex-container default-gap">
                {testimonials.map((testimonial, index) => (
                    <BoxTestimonial testimonial={testimonial} />
                ))}
            </div>
        </section>
    )
}

export default SectionCustomersSay 