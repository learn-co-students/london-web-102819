import React from "react";
import Task from "./Task";

const TaskList = props => {
  return props.tasks.map(task => (
    <Task {...task} onDelete={() => props.handleDeleteTask(task)} />
  ));
};

export default TaskList;
