import { Link } from "react-router-dom";

// Confirmation screen shown after a successful reservation
export function BookingConfirmed() {
    return (
        <div className="flex-container flex-column items-center">
            <h3>Thanks for booking a table!</h3>
            <Link to="/">Back to Home</Link>
        </div>
    )
}