function BoxSpecial({special}) {
    return (
    <div className="special border flex-container flex-column">
        <img src={special.srcImage || null} alt={special.name} />
        <div className="padding">
            <div className="flex-container justify-between items-center">
                <h3>{special.className}</h3>
                <span className="price">{special.price}</span>
            </div>
            <p>
                {special.description} 
            </p>
            <a href="#">Order a delivery</a>
        </div>
    </div>
    )
}

export default BoxSpecial