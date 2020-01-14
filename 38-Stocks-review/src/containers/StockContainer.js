import React, { Component } from "react";
import Stock from "../components/Stock";

class StockContainer extends Component {
  render() {
    const stocks = this.props.stocks.map(stock => (
      <Stock {...stock} handleOnClick={() => this.props.buyStock(stock.id)} />
    ));
    return (
      <div>
        <h2>Stocks</h2>
        {stocks}
      </div>
    );
  }
}

export default StockContainer;
