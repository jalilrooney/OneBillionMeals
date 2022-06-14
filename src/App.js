import logo from './logo.svg';
import './App.css';
import NavBar from './components/Header/NavBar.js'
import AuctionStatus from './components/AuctionStatus/AuctionStatus.js';
import AuctionCard from './components/AuctionCard/AuctionCard.js'
import Offers from './components/Offers/Offers.js'

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="donations-container">
        <AuctionStatus />
        <AuctionCard contributions = "500" />
      </div>
      <Offers />
    </div>
  );
}

export default App;
