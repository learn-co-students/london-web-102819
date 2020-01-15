import React from "react";

class Poem extends React.Component {
  render() {
    const {
      handleReadClick,
      handleLikeClick,
      handleDeleteClick,
      title,
      author,
      content,
      read,
      liked
    } = this.props;

    return (
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
        <p>
          <strong>- By {author}</strong>
        </p>
        <button onClick={handleReadClick}>
          {read ? "Mark as unread" : "Mark as read"}
        </button>
        <button onClick={handleLikeClick}>
          {liked ? "Mark as unliked" : "Mark as liked"}
        </button>
        <button
          style={{ background: "red", color: "white" }}
          onClick={handleDeleteClick}
        >
          Delete this poem
        </button>
      </div>
    );
  }
}

export default Poem;
