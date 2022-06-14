export default function TxList({ txs }) {
  if (txs.length === 0) return null;

  return (
    <>
      {txs.map((item) => (
        <div key={item} className="alert alert-info mt-5">
          <div className="transactionHash">
            <label>Transaction Hash: </label>
            <a href={`https://rinkeby.etherscan.io/tx/${item.hash}`}>{item.hash}</a>
          </div>
        </div>
      ))}
    </>
  );
}
