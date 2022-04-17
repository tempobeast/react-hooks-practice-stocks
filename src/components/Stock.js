import React from "react";

function Stock({ stock, onRemoveFromAvailable, onAddToPortfolioClick }) {

  const {ticker, name, price} = stock

  function handleClick(e) {
    onAddToPortfolioClick(stock)
    onRemoveFromAvailable(stock)
  }

  return (
    <div>
      <div className="card" onClick={handleClick}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}: {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
