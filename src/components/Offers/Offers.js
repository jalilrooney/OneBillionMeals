import OfferCard from "../OfferCard/OfferCard.js";
import cinema from "../../assets/Cinema.jpeg";
import AuraSkyPool from "../../assets/Aura-Sky-Pool.jpeg"
import louvre from "../../assets/louvre.jpeg"
import partners from "../../assets/partners.png"

export default function Offers() {

  return (
    <main className="Offers">
      <h1 className="offers-header">Offers</h1>
      <h1 className="ticket-offer">Bid up to 1 ETH - Free Cinema Ticket</h1>
      <OfferCard img={cinema} title="Free Cinema Ticket" text="Contribute with 1 ETH and get a free cinema ticket to any movie of your choice" />
      <h1 className="ticket-offer">Bid up to 5 ETH - Free Entry To Aura Sky Pool Dubai</h1>
      <OfferCard img={AuraSkyPool} title="Free Entry To Aura Sky Pool Dubai" text="Contribute with 1 ETH and get a free entry to Aura Sky Pool Dubai" />
      <h1 className="ticket-offer">Bid up to 10 ETH - Free Year Pass To Louvre Abu Dhabi Museum</h1>
      <OfferCard img={louvre} title="Free Year Pass To Louvre Abu Dhabi Museum" text="Contribute with 1 ETH and get a free year pass to Louvre Abu Dhabi Museum" />
      <h1 className="partners">Our Partners</h1>
      <img className="partners-img" src={partners} />
    </main>
  );
}
