import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../features/todo/todoSlice";

function Todos() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    return (
        <div className="container mx-auto p-4">
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} className="flex flex-col md:flex-row justify-between items-center bg-gray-600 p-2 my-2 rounded">
                        <div className="flex items-center w-full md:w-auto">
                            <button
                                className={`w-10 h-10 rounded-full ${todo.completed ? 'bg-green-400' : 'bg-red-400'}`}
                                onClick={() => dispatch(toggleTodo(todo.id))}
                            >
                                {''}
                            </button>
                            <div className="ml-4 text-white">{todo.text}</div>
                        </div>
                        <button
                            className="bg-red-400 w-10 h-10 rounded-full mt-2 md:mt-0"
                            onClick={() => dispatch(removeTodo(todo.id))}
                        >
                            X
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todos;
