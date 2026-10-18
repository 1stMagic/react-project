import BoxTestimonial from "./BoxTestimonial.js"

const testimonials = [
    {
        rating: 4,
        name: "Marc J.",
        reviewText: "Very delicious food."
    },
    {
        rating: 5,
        name: "Julia M.",
        reviewText: "Best restaurant in town."
    },
    {
        rating: 4,
        name: "John K.",
        reviewText: "Love to order online."
    },
    {
        rating: 5,
        name: "Sandra F.",
        reviewText: "So good. Will return."
    }
]

function SectionCustomersSay() {
    return (
        <section id="section-customers-say">
            <h2>Testimonials</h2>
            <div className="testimonials default-gap">
                {testimonials.map((testimonial, index) => (
                    <BoxTestimonial testimonial={testimonial} key={index} />
                ))}
            </div>
        </section>
    )
}

export default SectionCustomersSay 