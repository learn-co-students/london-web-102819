import React from "react";

class PaintingItem extends React.Component {
  // shouldComponentUpdate(prevProps, prevState) {
  //   console.log("painting item should component update?");
  //   return true;
  // }

  state = {
    changed: false
  };

  componentWillUnmount() {
    console.log(this.props.painting.title, "will unmount");
    clearTimeout(this.timeoutID);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps.painting.votes, this.props.painting.votes);
    if (prevProps.painting.votes < this.props.painting.votes) {
      this.setState({
        changed: true
      });
      this.timeoutID = setTimeout(
        () => this.setState({ changed: false }),
        5000
      );
      console.log(this.timeoutID);
    }
  }

  render() {
    console.log("painting item render");
    const { painting, handleVoteClick } = this.props;
    const { title, image, votes } = painting;

    return (
      <div>
        <h1>{title}</h1>
        <img src={image} alt={title} />
        <p className={this.state.changed ? "green" : undefined}>
          Votes: {votes}
        </p>
        <button onClick={() => handleVoteClick(painting)}>
          Vote for thie painting
        </button>
      </div>
    );
  }
}

export default PaintingItem;

export const sayhello = () => console.log("hello");
export const saybye = () => console.log("bye");
