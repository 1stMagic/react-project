import { useNavigate } from "react-router-dom"

// Hero section with intro text and a button leading to the booking page
function SectionCallToAction() {
    const navigate = useNavigate();

    // Navigate to the reservation form
    function goToReserveATable() {
        navigate("/booking")
    }

    return (
        <section id="section-call-to-action">
            <div className="flex-container default-gap items-center">
                <div className="intro flex-container flex-column default-gap">
                    <h2>LittleLemon</h2>
                    <h3>Chicago</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    </p>
                    <button type="button" onClick={goToReserveATable}>
                        Reserve a table
                    </button>
                </div>
                <div className="cta-image"></div>
                {/*<img className="border border-radius" src="/images/waiter.jpg" alt="Waiter with plate" /> */}
            </div>
        </section>
    )
}

export default SectionCallToAction