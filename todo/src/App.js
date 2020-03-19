import React from 'react';
import TodoList from "./components/TodoList";
import "./components/todo.css";
import "./logo.svg";



const App = () => {
    return (
      <div  className="box">
        <h2>Welcome to your Todo App!</h2>
        <TodoList/> 
      </div>
    );
  }


export default App;