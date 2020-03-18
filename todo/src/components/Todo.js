import React from "react";
import "./todo.css";

const Todo = ({ todo, dispatch }) => {
    const { item, completed, id } = todo;
    const handleComplete = () => {
        dispatch({
            type: "TOGGLE_COMPLETED",
            payload: id
        })
    }

    return (
        <div 
        onClick={handleComplete}
        >
             <p>{item}</p>
        </div>
    )
}
export default Todo;
