import React, { useReducer } from "react";
import { todoReducer, initialValue } from "../reducers/todoReducer";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import "./todo.css";

const TodoList = () => {
    const [state, dispatch] = useReducer(todoReducer, initialValue)

    return (
        <div>
                    <TodoForm dispatch={dispatch}/>
            {state.map(item => {
                console.log('*****',item)
                return (
                    <Todo
                    key={item.id}
                    todo={item} 
                    dispatch={dispatch}/>)
            })}
        </div>
    )
       
}

export default TodoList;