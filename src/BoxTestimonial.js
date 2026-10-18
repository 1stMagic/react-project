import { Star } from "lucide-react";

// Single testimonial card: star rating, reviewer initial and name, review text
function BoxTestimonial({testimonial}) {
    return (
        <div className="testimonial flex-container flex-column border padding flex-1">
            <div aria-label={`Rated ${testimonial.rating} out of 5`}>
            {Array.from({ length: testimonial.rating }).map((_, index) => (
                <Star key={index} aria-hidden="true" />
            ))}
            </div>
             <div className="flex-container items-center justify-center default-gap">
                <span className="letter">{testimonial.name.substring(0, 1)}</span>
                <span className="name">{testimonial.name}</span>
            </div>
            <p>
                {testimonial.reviewText}
            </p>
        </div>
    )
}

export default BoxTestimonial