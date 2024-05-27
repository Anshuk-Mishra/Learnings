import { useEffect, useState } from 'react'
import { TodoProvider } from './context/index'
import { TodoForm, TodoItem } from './components/index'
import './App.css'

function App() {
  
  const [todo, setTodo] = useState([])

  const addToDo = (task) => {
    setTodo((prev) => {[{id: Date.now(),...task},...prev]})
  }
  
  const updateToDo = (task,id) => {
    setTodo((prev) => prev.map((prevTask) => (prevTask.id === id ? todo : prevTask)))
  }

  const deleteToDo = (id) => {
    setTodo((prev) => prev.filter((val) => val.id !== id))
  }

  const toggleComplete = (id) => {
    setTodo((prev) => prev.map((prevTask) => (prevTask.id === id ? {...prevTask, completed: !prevTask.completed} : prevTask)))
  }

  useEffect(()=>{
    const todo = JSON.parse(localStorage.getItem('todo'))

    if(todo && todo.length > 0){
      setTodo(todo)
    }
  },[])
  
  useEffect(()=>{
    localStorage.setItem("todo",JSON.stringify(todo))
  },[todo])

  return (
    <TodoProvider value={{todo,addToDo,updateToDo,deleteToDo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {
              todo.map(
                (temp) => (
                  <div key={temp.id} className='w-full'>
                    <TodoItem todo={temp}/>
                  </div>
                )
              )
            }
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
