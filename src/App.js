import React from 'react';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import "./components/Todo.css";


const tasks = [
      
  {
    task: "Do stretch goals",
    id: 1,
    completed: false,
  },

  {
    task: "Build portfolio",
    id: 2,
    completed: false,
  },

  {
  task: "Improve on sprint and build week projects",
  id: 3,
  completed: false,
  },

  {
    task: "Conduct informational interviews",
    id: 4,
    completed: false,
    },

]

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
    
      tasks: tasks

    };
  }

  toggleTask = (taskId) => {
    this.setState ({
      tasks: this.state.tasks.map((item) => {
        if (item.id === taskId) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  };

  clearCompleted = () => {
    this.setState({
      tasks: this.state.tasks.filter((item) => {
        return !item.completed;
      })
    })
  }

  addTask = (taskName) => {
    console.log("al: App.js: addTask: taskName: ", taskName);
    this.setState({
      tasks: [
        ...this.state.tasks,
        {id: Date.now(), task: taskName, completed: false}
      ]
    });
  };
  
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="mainDiv">

      <div className ="subDiv">
        <h1>Angelyn's To-Do List</h1>
        <TodoForm
        addTask={this.addTask} 
        />
        </div>
      
        <TodoList 
        tasks={this.state.tasks}
        toggleTask={this.toggleTask}
        clearCompleted={this.clearCompleted} 
        />
       
      </div>
    );
  }
  }

export default App;
