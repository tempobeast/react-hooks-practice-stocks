import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [availableStocks, setAvailableStocks] = useState([])
  const [portfolioStocks, setPortfolioStocks] = useState([])
  const [filterType, setFilterType] = useState("All")
  const [sortType, setSortType] = useState("")
  
  console.log(availableStocks)

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
    .then((res) => res.json())
    .then((data) => setAvailableStocks(data))
  }, [])

  function onAddToPortfolioClick(toAddObj) {
    setPortfolioStocks([...portfolioStocks, toAddObj])
  }

  function onRemoveFromAvailable(toRemoveObj) {
    const updatedAvailableStocks = availableStocks.filter((stock) => {
      if (stock.id === toRemoveObj.id) {
        return false
      } else {
        return stock
      }
    })
    setAvailableStocks(updatedAvailableStocks)
  }

  function onFilterChange(stockType) {
    setFilterType(stockType)
  }

   function onSortByChange(sortName) {
     setSortType(sortName)
   }
  

  return (
    <div>
      <SearchBar onFilterChange={onFilterChange} onSortByChange={onSortByChange}/>
      <div className="row">
        <div className="col-8">
          <StockContainer 
          availableStocks={availableStocks}
          onAddToPortfolioClick={onAddToPortfolioClick}
          onRemoveFromAvailable={onRemoveFromAvailable}
          filterType={filterType}
          sortType={sortType}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolioStocks={portfolioStocks}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
