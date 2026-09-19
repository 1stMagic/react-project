import { Star } from "lucide-react";

function BoxTestimonial({testimonial}) {
    return (
        <div className="testimonial flex-container flex-column border padding flex-1">
            <div aria-label={`Rated ${testimonial.rating} out of 5`}>
            {Array.from({ length: testimonial.rating }).map((_, index) => (
                <Star key={index} aria-hidden="true" />
            ))}
            </div>
            <div className="flex-container default-gap">
                <img src={testimonial.srcImage || null} alt={testimonial.name} />
                <span className="name">{testimonial.name}</span>
            </div>
            <p>
                {testimonial.reviewText}
            </p>
        </div>
    )
}

export default BoxTestimonial