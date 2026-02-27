import '../styles/popularCard.css'

function JollofCard (props) {
    const {image, title, description, price} = props;
    return (
        <div className="card-container">
            <div className="card-image-wrapper">
                <img src={image} alt={title} className="card-image" />
            </div>
            <div className="card-content">
                <h2>{title}</h2>
                <p>{description}</p>
                <div className="card-footer">
                    <span className="card-price">{price}</span>
                    <button className="add-button">+</button>
                </div>
            </div>
        </div>
        
    )
}

export default JollofCard;