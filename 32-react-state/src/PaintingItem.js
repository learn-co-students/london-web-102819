import React from "react";

class PaintingItem extends React.Component {
  render() {
    const { painting, handleVoteClick } = this.props;
    const { title, image, votes } = painting;

    return (
      <div>
        <h1>{title}</h1>
        <img src={image} alt={title} />
        <p>Votes: {votes}</p>
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
