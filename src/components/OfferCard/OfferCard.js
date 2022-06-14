export default function OfferCard(props) {
    return (
        <div class="offer-card">
            <div class="card-horizontal">
                <div class="offer-image-div">
                    <img class="offer-image" src={props.img} />
                </div>
                <div class="offer-card-body">
                    <h4 class="offer-card-title">{props.title}</h4>
                    <p id="offer-card-text" class="offer-card-text">{props.text}</p>
                    <button id="contribute-btn" class="contribute-btn">Contribute Now</button>
                </div>
            </div>
        </div>
    )
}