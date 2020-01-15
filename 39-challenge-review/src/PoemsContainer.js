import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
  render() {
    const { poems, readPoem, likePoem, deletePoem } = this.props;
    return (
      <div className="poems-container">
        {poems.map(poem => (
          <Poem
            key={poem.id}
            {...poem}
            handleReadClick={() => readPoem(poem)}
            handleLikeClick={() => likePoem(poem)}
            handleDeleteClick={() => deletePoem(poem)}
          />
        ))}
      </div>
    );
  }
}

export default PoemsContainer;
