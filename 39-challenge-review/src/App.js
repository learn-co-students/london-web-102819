import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";
import API from "./API";

class App extends React.Component {
  state = {
    poems: [],
    readPoemIds: [],
    likedPoemIds: [],
    showForm: false
  };

  toggleForm = () => this.setState({ showForm: !this.state.showForm });

  getPoems = () => {
    API.getPoems().then(poems => this.setState({ poems }));
  };

  addPoem = newPoem => {
    API.postPoem(newPoem).then(poem =>
      this.setState({
        poems: [...this.state.poems, poem]
      })
    );
  };

  readPoem = poem => {
    if (this.state.readPoemIds.includes(poem.id)) {
      this.setState({
        readPoemIds: this.state.readPoemIds.filter(pid => pid !== poem.id)
      });
    } else {
      this.setState({
        readPoemIds: [...this.state.readPoemIds, poem.id]
      });
    }
  };

  likePoem = poem => {
    if (this.state.likedPoemIds.includes(poem.id)) {
      this.setState({
        likedPoemIds: this.state.likedPoemIds.filter(pid => pid !== poem.id)
      });
    } else {
      this.setState({
        likedPoemIds: [...this.state.likedPoemIds, poem.id]
      });
    }
  };

  deletePoem = poem => {
    API.deletePoem(poem).then(() => {
      this.setState({
        poems: this.state.poems.filter(p => p.id !== poem.id)
      });
    });
  };

  componentDidMount() {
    this.getPoems();
  }

  render() {
    const poemsToRender = this.state.poems.map(poem => {
      return {
        ...poem,
        read: this.state.readPoemIds.includes(poem.id),
        liked: this.state.likedPoemIds.includes(poem.id)
      };
    });
    const likedPoems = poemsToRender.filter(p => p.liked);

    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.toggleForm}>Show/hide new poem form</button>
          {this.state.showForm && <NewPoemForm onSubmit={this.addPoem} />}
        </div>
        <PoemsContainer
          poems={poemsToRender}
          likePoem={this.likePoem}
          readPoem={this.readPoem}
          deletePoem={this.deletePoem}
        />
        <PoemsContainer
          poems={likedPoems}
          likePoem={this.likePoem}
          readPoem={this.readPoem}
          deletePoem={this.deletePoem}
        />
      </div>
    );
  }
}

export default App;
