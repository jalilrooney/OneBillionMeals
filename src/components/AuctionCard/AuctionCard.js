import oneBillionMeals from '../../assets/oneBillionMeals.png';
import ContributeButton from '../ContributeButton/ContributeButton.js'
import oneBillionMealsLogo from '../../assets/oneBillionMealsLogo.jpeg'
import ConfettiCanvas from 'react-confetti-canvas';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize'
import spinner from '../../assets/spinner.gif'
import binanceLogo from '../../assets/binanceLogo.png'

export default function AuctionCard(props) {
    const { width, height } = useWindowSize()
    return (
        <div class="auctionCard">
            <div class="card-horizontal">
                <div class="auctionImage-div">
                    <img class="auctionImage" src={oneBillionMeals} alt="oneBillionMeals" />
                </div>
                <div class="card-body">
                    <h4 class="auctionCard-title">One Billion Meals (UAE)</h4>
                    <p id="auctionCard-text" class="auctionCard-text">Contribution Range - 0.010000 ETH - 8.9 ETH
  |  Number of Contributions - {props.contributions}</p>
                    <h2 className="amount-left-for-auction-end" id="ETHtoPay">Amount Left For Donations To End: 0.7 ETH</h2>
                    <div id="fractions-minting" class="fractions-minting">
                        <img src={spinner} className="fractions-minting-spinner" alt="loading..."></img>
                        <h2 className="fractions-minting-header" id="ETHtoPay">Fractions will be minted in few hours</h2>
                    </div>
                    <a className="marketplace-url" id="marketplace-url" href="https://testnets.opensea.io/collection/uae-one-billion-meals">Check Fractions on Marketplace</a>
                    <div id="contribute-div"><ContributeButton /></div>
                    <div className="contributers-logos">
                        <img src={binanceLogo} className="binanceLogo" />
                        <img src={oneBillionMealsLogo} className="oneBillionMealsLogo" />
                    </div>
                    <div id="confetti" className="confetti">
                        <Confetti
                        width={width - 20}
                        height={height}
                        numberOfPieces={200}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}