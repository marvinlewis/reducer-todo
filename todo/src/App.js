import React from 'react';
import TodoList from "./components/TodoList";
import "./components/todo.css";



const App = () => {
    return (
      <div className="middle">
        <h2>Welcome to your Todo App!</h2>
        <TodoList/> 
      </div>
    );
  }


export default App;