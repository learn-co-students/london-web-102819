import React from "react";

const Task = ({ category, text, onDelete }) => {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={onDelete}>
        X
      </button>
    </div>
  );
};

export default Task;
