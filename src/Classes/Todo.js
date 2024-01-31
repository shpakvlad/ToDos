import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {addTodo, toggleComplete, deleteTodo, editToDo} from "../js/todoSlice";
import './Todo.css';

const Todo = () => {
    const [text, setText] = useState("");
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        setText(e.target.value);
    };

    const handleAddTodo = () => {
        if (text) {
            dispatch(addTodo(text));
            setText("");
        }
    };

    const handleToggleComplete = (id) => {
        dispatch(toggleComplete(id));
    };

    const handleDeleteTodo = (id) => {
        dispatch(deleteTodo(id));
    };

    const handleEditTodo = (id) => {
        dispatch(editToDo(id));
    }

    return (
        <div className="wrapper">
            <h1>TodoList with reactJS/toolkit/slice </h1>

            <input type="text" value={text} onChange={handleInputChange}/>
            <button onClick={handleAddTodo}>Add Todo</button>
            {/*<button onClick={handleAddTodo}>Show completed</button>*/}

            <ul>
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        style={{
                            textDecoration: todo.completed ? "line-through" : "none",
                            backgroundColor: todo.completed ? "palevioletred" : "lightskyblue",

                        }}
                    >
                        <p>{todo.text}</p>
                        <button onClick={() => handleToggleComplete(todo.id)}>
                            {todo.completed ? "Incomplete" : "Complete"}
                        </button>
                        <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                        {/*<button onClick={() => handleEditTodo(todo.id)}>Edit</button>*/}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todo;