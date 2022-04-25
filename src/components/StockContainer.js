import React from "react";
import Stock from "./Stock";

function StockContainer({ availableStocks, onRemoveFromAvailable, onAddToPortfolioClick, filterType, sortType }) {

  const filterStocks = availableStocks
  .filter((stock) => {
    if (filterType === "All") {
      return stock
    } else {
      return stock.type === filterType
    }
  })
  
const objArr = [
  {name: "kate", init: "a"},
  {name: "zach", init: "t"},
  {name: "lee", init: "j"},
  {name: "mavis", init: "m"},
  {name: "murph", init: "kps"}
]

const sortFamily = objArr.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
console.log(sortFamily)


//this doesn't work yet
  const handleSort = filterStocks.sort((a, b) => {
    if (sortType === "Alphabetically") {
      return  (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)
    } else if (sortType === "Price") {
      return (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0)
    } else {
      return null
    }
  })
  console.log(handleSort)

  const renderAvailableStocks = handleSort.map((stock) => 
  <Stock 
  key={stock.id} 
  stock={stock}
  onAddToPortfolioClick={onAddToPortfolioClick}
  onRemoveFromAvailable={onRemoveFromAvailable}
  />)

  return (
    <div>
      <h2>Stocks</h2>
      {renderAvailableStocks}
    </div>
  );
}

export default StockContainer;
