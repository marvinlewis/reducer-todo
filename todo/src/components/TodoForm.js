import React, { useState, useReducer } from "react";
import "./todo.css"


const TodoForm = ({dispatch}) => {

    const [ input, setInput ] = useState("");


    const handleInput = (e) => {
        setInput(
            e.target.value
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ 
        type: "ADD_INPUT",
        payload: input})
        setInput(
            " "
        ); 
    }

    const handleClear = () => {
        dispatch({
            type: "CLEAR_TODOS"
        })
    }


     return(
         <>
        <form
        className="form" 
        onSubmit={handleSubmit}>
            <button>Add</button>
            <input
            type="text"
            name="input"
            placeholder="Type here"
            onChange={handleInput}
            value={input}
            />
        </form>
        </>
    )
  }

export default TodoForm;