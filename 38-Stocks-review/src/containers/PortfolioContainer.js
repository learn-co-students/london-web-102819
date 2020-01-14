import React, { Component } from "react";
import Stock from "../components/Stock";

class PortfolioContainer extends Component {
  render() {
    const stocks = this.props.stocks.map(stock => (
      <Stock {...stock} handleOnClick={() => this.props.sellStock(stock.id)} />
    ));

    return (
      <div>
        <h2>My Portfolio</h2>
        {stocks}
      </div>
    );
  }
}

export default PortfolioContainer;
