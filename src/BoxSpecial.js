function BoxSpecial({special}) {
    return (
    <div className="special border flex-container flex-column border-radius">
        <img src={special.imageSrc || null} alt={special.name} />
        <div className="padding flex-1 flex-container flex-column">
            <div className="flex-container justify-between items-center">
                <h3>{special.name}</h3>
                <span className="price">{special.price}</span>
            </div>
            <p>
                {special.description} 
            </p>
            <a href="#" className="order-delivery flex-container flex-none items-center justify-center small-gap">
                <span>Order a delivery</span>
                <img className="icon-delivery" src="/images/icon-delivery.png" alt="Delivery icon" />
            </a>
        </div>
    </div>
    )
}

export default BoxSpecial