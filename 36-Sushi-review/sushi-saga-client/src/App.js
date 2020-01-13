import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";
import Form from "./components/form";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  state = {
    sushis: [],
    eatenSushis: [],
    slicedIdx: 0,
    budget: 100
  };

  increaseSliceIdx = () =>
    this.state.slicedIdx >= 96
      ? this.setState({ slicedIdx: 0 })
      : this.setState({ slicedIdx: this.state.slicedIdx + 4 });

  findSushi = id => this.state.sushis.find(s => s.id === id);

  checkHasBeenEaten = sushiId => this.state.eatenSushis.includes(sushiId);

  topupBudget = amount => {
    this.setState({ budget: this.state.budget + amount });
  };

  eatSushi = sushiId => {
    const sushi = this.findSushi(sushiId);
    const remainingBudget = this.state.budget - sushi.price;

    if (remainingBudget >= 0) {
      this.setState({
        budget: remainingBudget,
        eatenSushis: [...this.state.eatenSushis, sushiId]
      });
    }
  };

  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(sushis => this.setState({ sushis }));
  }
  render() {
    const { sushis, slicedIdx, budget, eatenSushis } = this.state;
    return (
      <div className="app">
        <SushiContainer
          sushis={sushis}
          slicedIdx={slicedIdx}
          increaseSliceIdx={this.increaseSliceIdx}
          eatSushi={this.eatSushi}
          checkHasBeenEaten={this.checkHasBeenEaten}
        />
        <Form topupBudget={this.topupBudget} />
        <Table budget={budget} eatenSushis={eatenSushis} />
      </div>
    );
  }
}

export default App;
