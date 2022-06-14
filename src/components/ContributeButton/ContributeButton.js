import ErrorMessage from "./ErrorMessage";
import TxList from "./TxList";
import { ReactFloatingBalloons } from "react-floating-balloons";
import { useState } from "react";
import { ethers } from "ethers";
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize'


const startPayment = async ({ setError, setTxs, ether, addr }) => {
    try {
      if (!window.ethereum)
        throw new Error("No crypto wallet found. Please install it.");
  
      await window.ethereum.send("eth_requestAccounts");
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      ethers.utils.getAddress(addr);
      const tx = await signer.sendTransaction({
        to: addr,
        value: ethers.utils.parseEther(ether)
      });
      console.log({ ether, addr });
      console.log("tx", tx);
      setTxs([tx]);
    } catch (err) {
      setError(err.message);
    }
};

let ETHtoPay = 0.7;
export default function ContributeButton() {
    const [error, setError] = useState();
    const [txs, setTxs] = useState([]);

    

    const handleSubmit = async (e) => {
        e.preventDefault();
        let ether = document.getElementById("bidAmount").value;
        let addr = "0x1ec85352BBb2e7e29cd25A6D3d1419b0718F2834";
        setError();
        await startPayment({
        setError,
        setTxs,
        ether: ether,
        addr: addr
        });
        ETHtoPay -= +ether;
        if (ETHtoPay > 0) {
        document.getElementById("ETHtoPay").textContent = `Amount Left For Donations To End: ${ETHtoPay} ETH`
        } else {
        document.getElementById("ETHtoPay").textContent = `Donations Ended!`;
        document.getElementById("contribute-div").style.display = "none";
        document.getElementById("auction-live").style.display = "none";
        document.getElementById("confetti").style.display = "block";
        document.getElementById("fractions-minting").style.display = "flex";
        var elements = document.getElementsByClassName("contribute-btn");
        for(var i = 0; i < elements.length; i++) {
            elements[i].style.display = "none";
        }
        }
        document.getElementById("auctionCard-text").textContent = "Contribution Range - 0.010000 ETH - 8.9 ETH Number of Contributions - 500"
    };
    const { width, height } = useWindowSize()
    var c = <Confetti
    width={width - 20}
    height={height}
    numberOfPieces={200}
    run={true}
    />
    return (
        
        <div className="contribute-div">
            <div className="contribute">
                <input 
                    type="text"
                    placeholder="0.0" 
                    className="BidAmount" 
                    id="bidAmount">
                </input>
                <button
                    type="submit"
                    className="bidBtn"
                    onClick={handleSubmit}
                >
                    Contribute Now
                </button>
            </div>
            <ErrorMessage message={error} className="txErrorMessage" />
            <TxList txs={txs} />
            {ETHtoPay <= 0 ? (
                null
            ) : (null)}
        </div>
    );
}