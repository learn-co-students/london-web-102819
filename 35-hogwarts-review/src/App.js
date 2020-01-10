import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import API from "./adapters/API";
import HogList from "./components/HogList";
import SortAndFilterOptions from "./components/SortFilterOptions";
import { SORT_TYPES } from "./components/config";

// HogList
// Hog
// HogInfo

// SortAndFilterOptions

class App extends Component {
  state = {
    hogs: [],
    hiddenHogs: [],
    showGreasedOnly: false,
    sortType: SORT_TYPES.DEFAULT
  };

  componentDidMount() {
    API.getHogs().then(hogs => this.setState({ hogs }));
  }
  toggleShowGreasedOnly = () =>
    this.setState({ showGreasedOnly: !this.state.showGreasedOnly });

  setSortType = sortType => this.setState({ sortType });

  hideHog = hog => {
    API.patchHog({
      ...hog,
      hidden: true
    });
    this.setState({
      hiddenHogs: [...this.state.hiddenHogs, hog.id]
    });
  };

  sortHogs = (hogs, sortType) => {
    if (sortType === SORT_TYPES.DEFAULT) return hogs;

    if (sortType === SORT_TYPES.NAME)
      return [...hogs].sort((a, b) => a.name.localeCompare(b.name));

    if (sortType === SORT_TYPES.WEIGHT)
      return [...hogs].sort((a, b) => b.weight - a.weight);
  };

  filterHogs = hogs => {
    const filteredHogs = this.state.showGreasedOnly
      ? this.state.hogs.filter(hog => hog.greased)
      : this.state.hogs;
    return filteredHogs
      .filter(hog => !this.state.hiddenHogs.includes(hog.id))
      .filter(hog => !hog.hidden);
  };

  render() {
    const filteredHogs = this.filterHogs(this.state.hogs);

    const sortedHogs = this.sortHogs(filteredHogs, this.state.sortType);

    return (
      <div className="App">
        <Nav />
        <SortAndFilterOptions
          setSortType={this.setSortType}
          sortType={this.state.sortType}
          toggleShowGreasedOnly={this.toggleShowGreasedOnly}
          showGreasedOnly={this.state.showGreasedOnly}
        />
        <HogList hogs={sortedHogs} hideHog={this.hideHog} />
      </div>
    );
  }
}

export default App;
