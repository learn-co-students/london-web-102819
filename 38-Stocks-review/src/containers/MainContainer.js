import React, { Component } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "../components/SearchBar";

const stocksUrl = "http://localhost:3001/stocks";

const sortDic = {
  Alphabetically: {
    asc: (a, b) => a.name.localeCompare(b.name),
    desc: (a, b) => b.name.localeCompare(a.name)
  },
  Price: { asc: (a, b) => a.price - b.price, desc: (a, b) => b.price - a.price }
};

class MainContainer extends Component {
  state = {
    stocks: [],
    portfolio: [],
    filterType: "All",
    sort: { type: "Alphabetically", order: "asc" }
  };

  componentDidMount() {
    fetch(stocksUrl)
      .then(r => r.json())
      .then(stocks => this.setState({ stocks }));
  }

  buyStock = stockId => {
    this.state.portfolio.includes(stockId)
      ? null
      : this.setState({ portfolio: [...this.state.portfolio, stockId] });
  };

  sellStock = stockId => {
    const remainingStocks = this.state.portfolio.filter(s => s !== stockId);
    this.setState({ portfolio: remainingStocks });
  };

  updateFilter = filterType => {
    this.setState({ filterType });
  };

  updateSortType = type => {
    this.setState({ sort: { ...this.state.sort, type } });
  };

  updateSortOrder = order => {
    this.setState({ sort: { ...this.state.sort, order } });
  };
  sortStocks = stocksArr => {
    return stocksArr.sort(sortDic[this.state.sort.type][this.state.sort.order]);
  };

  stocksFilter = stocksArr => {
    return this.state.filterType === "All"
      ? stocksArr
      : stocksArr.filter(stock => stock.type === this.state.filterType);
  };

  proccessedStocks = stocksArr => {
    const filtered = this.stocksFilter(stocksArr);
    return this.sortStocks(filtered);
  };

  render() {
    const { stocks, portfolio, sort } = this.state;
    const portfolioStocks = stocks.filter(s => portfolio.includes(s.id));
    const fileteredSortered = this.proccessedStocks(stocks);

    return (
      <div>
        <SearchBar
          updateFilter={this.updateFilter}
          sortType={sort.type}
          updateSortType={this.updateSortType}
          updateSortOrder={this.updateSortOrder}
        />

        <div className="row">
          <div className="col-8">
            <StockContainer
              stocks={fileteredSortered}
              buyStock={this.buyStock}
            />
          </div>
          <div className="col-4">
            <PortfolioContainer
              sellStock={this.sellStock}
              stocks={portfolioStocks}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
