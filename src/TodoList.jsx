import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import "./TodoList.css"

export default function TodoList() {
    let [todos, setTodos] = useState([]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        if (newTodo) {
            setTodos((prevTodos) => [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }]);
        } else {
            alert("Please enter task to add");
        }
        setNewTodo("");
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let deleteTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((prevTodos) => prevTodos.id != id));
    }

    let doneOne = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        isDone: true,
                    };
                } else {
                    return todo;
                }
            })
        );
    };
    let doneAll = () => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                return {
                    ...todo,
                    isDone: true,
                };
            })
        );
    };

    return (
        <div className="todo-container">
            <h4>Add a New Task</h4>
            <input
                type="text"
                placeholder="add a task"
                value={newTodo}
                onChange={updateTodoValue}
                className="todo-input"
            />

            <br /> <br />

            <button onClick={addNewTask} className="add-button">Add</button>

            <br /> <br /><br />
            <hr />

            <h4 className="todo-heading">Tasks</h4>
            <ul className="todo-list">
                {todos.length === 0 ? (
                    <li className="no-task-message">“A blank slate. Time to plan something great.”</li>
                ) :
                    todos.map((todo) => (
                        <li key={todo.id} className="todo-item">
                            <span
                                style={{ textDecoration: todo.isDone ? "line-through" : "none" }}
                                className="todo-text"
                            >
                                {todo.task}
                            </span>
                            <button
                                style={{ marginLeft: "1rem", marginBottom: "1rem" }}
                                onClick={() => deleteTodo(todo.id)}
                                className="delete-button"
                            >
                                Delete
                            </button>
                            <button
                                style={{ marginLeft: "1rem", marginBottom: "1rem" }}
                                onClick={() => doneOne(todo.id)}
                                className="done-button"
                            >
                                Mark as Done
                            </button>
                        </li>
                    ))
                }
            </ul>

            <br /> <br />
            <button
                onClick={doneAll}
                style={{ marginLeft: "1rem", marginBottom: "1rem" }}
                className="done-all-button"
            >
                Mark All as Done
            </button>
        </div>
    )
}