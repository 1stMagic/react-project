import { useNavigate } from "react-router-dom"

function SectionCallToAction() {
    const navigate = useNavigate();

    function goToReserveATable() {
        navigate("/booking")
    }

    return (
        <section>
            <div className="flex-container default-gap">
                <div className="flex-container flex-column flex-1">
                    <h2>LittleLemon</h2>
                    <span>Chicago</span>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    </p>
                    <button type="button" onClick={goToReserveATable}>
                        Reserve a table
                    </button>
                </div>
                <img className="flex-1" src={null} alt="Image 1" />
            </div>
        </section>
    )
}

export default SectionCallToAction