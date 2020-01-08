import React from "react";
import "./App.css";
import { CATEGORIES } from "./data";
import CategoryFilters from "./components/CategoryFilters";
import TaskList from "./components/TaskList";
import NewTaskForm from "./components/NewTaskForm";

class App extends React.Component {
  state = {
    categoryFilter: CATEGORIES[0],
    tasks: [
      {
        text: "Buy rice",
        category: "Food"
      },
      {
        text: "Save a tenner",
        category: "Money"
      },
      {
        text: "Build a todo app",
        category: "Code"
      },
      {
        text: "Build todo API",
        category: "Code"
      },
      {
        text: "Get an ISA",
        category: "Money"
      },
      {
        text: "Cook rice",
        category: "Food"
      },
      {
        text: "Tidy house",
        category: "Misc"
      }
    ]
  };

  changeSelectedCategory = categoryFilter => {
    this.setState({
      categoryFilter
    });
  };

  handleDeleteTask = task => {
    this.setState({
      tasks: this.state.tasks.filter(t => {
        return t.category !== task.category || t.text !== task.text;
      })
    });
  };

  addTask = task => {
    console.log(task);
    this.setState({
      tasks: [...this.state.tasks, task]
    });
  };

  render() {
    const filteredTasks =
      this.state.categoryFilter === CATEGORIES[0]
        ? this.state.tasks
        : this.state.tasks.filter(
            t => t.category === this.state.categoryFilter
          );

    return (
      <div className="App">
        <h2>My tasks</h2>
        <CategoryFilters
          categories={CATEGORIES}
          onSelectCategory={this.changeSelectedCategory}
          selectedCategory={this.state.categoryFilter}
        />
        <div className="tasks">
          <h5>Tasks</h5>
          <NewTaskForm
            onSubmit={this.addTask}
            categories={CATEGORIES.filter(
              category => category !== CATEGORIES[0]
            )}
          />
          <TaskList
            tasks={filteredTasks}
            handleDeleteTask={this.handleDeleteTask}
          />
        </div>
      </div>
    );
  }
}

export default App;

const obj = { name: "sam" };
const obj2 = { name: "sam" };

const obj3 = obj;

console.log(obj === obj2);
console.log(obj === obj3);
console.log(JSON.stringify(obj) === JSON.stringify(obj2));
