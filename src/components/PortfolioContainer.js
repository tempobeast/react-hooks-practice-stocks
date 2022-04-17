import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolioStocks }) {

  const renderPortfolio = portfolioStocks.map((stock) => <Stock key={stock.id} stock={stock}/>)

  return (
    <div>
      <h2>My Portfolio</h2>
      {
        renderPortfolio
      }
    </div>
  );
}

export default PortfolioContainer;
