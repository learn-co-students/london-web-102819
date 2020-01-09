import React from "react";
import "./App.css";
import paintings from "./paintings";
import PaintingItem from "./PaintingItem";
import SortAndFilterOptions from "./SortAndFilterOptions";
import API from "./API";

class App extends React.Component {
  state = {
    paintings: [],
    searchTerm: "",
    onlyPopular: true,
    sortType: "DEFAULT"
  };

  componentDidMount() {
    API.getPaintings().then(paintings => this.setState({ paintings }));
  }

  handleVoteClick = painting => {
    console.log(painting.votes);
    // const paintingIndex = this.state.paintings.indexOf(painting);
    // this.state.paintings[paintingIndex].votes++;

    this.setState({
      paintings: this.state.paintings.map(p => {
        if (p.id !== painting.id) return p;
        return {
          ...p,
          votes: p.votes + 1
        };
      })
    });
  };

  handleSearchChange = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  handleSortTypeChange = event => {
    this.setState({
      sortType: event.target.value
    });
  };

  sortPaintings = (paintings, sortType) => {
    if (sortType === "DEFAUTL") return paintings;

    if (sortType === "VOTE") return paintings.sort((a, b) => b.votes - a.votes);

    if (sortType === "ALPHA")
      return paintings.sort((a, b) => a.title.localeCompare(b.title));
  };

  togglePopular = () => this.setState({ onlyPopular: !this.state.onlyPopular });

  render() {
    const searchMatchedPaintings = this.state.paintings.filter(p =>
      p.title
        .toLocaleLowerCase()
        .includes(this.state.searchTerm.toLocaleLowerCase())
    );
    const paintingsToRender = this.state.onlyPopular
      ? searchMatchedPaintings.filter(painting => painting.votes > 90)
      : searchMatchedPaintings;

    const sortedPaintingsToRender = this.sortPaintings(
      paintingsToRender,
      this.state.sortType
    );

    return (
      <div className="App">
        <SortAndFilterOptions
          handleSortTypeChange={this.handleSortTypeChange}
          sortType={this.state.sortType}
          handleSearchChange={this.handleSearchChange}
          togglePopular={this.togglePopular}
          onlyPopular={this.state.onlyPopular}
        />
        {paintingsToRender.length > 0 ? (
          paintingsToRender.map((painting, index) => (
            <PaintingItem
              key={painting.id}
              painting={painting}
              handleVoteClick={this.handleVoteClick}
            />
          ))
        ) : (
          <p>please wait</p>
        )}
      </div>
    );
  }
}

// PaintingItem({
//   painting: paintings[0],
//   handleVoteClick: () => {
//     console.log(
//       "this has been clicked even though i'm not in the painting component"
//     );
//   }
// });

export default App;
