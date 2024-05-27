import {createContext, useContext} from "react"

export const TodoContext = createContext({
    todo: [
        {
            id: 1,
            task: " Todo msg",
            completed: false,
        }
    ],
    addTodo: (task) => {},
    updateTodo: (id, task) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})


export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider