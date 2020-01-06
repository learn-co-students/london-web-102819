import React from "react";
import "./App.css";
import paintings from "./paintings";
import PaintingItem from "./PaintingItem";

class App extends React.Component {
  handleVoteClick = painting => {
    console.log(painting.title);
  };
  render() {
    const paintingsToRender = paintings.filter(painting => painting.votes > 90);

    return (
      <div className="App">
        {paintingsToRender.map((painting, index) => (
          <PaintingItem
            key={painting.id}
            painting={painting}
            handleVoteClick={this.handleVoteClick}
          />
        ))}
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
