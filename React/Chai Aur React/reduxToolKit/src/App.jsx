import './App.css'
import AddTodo from './components/AddTodo.jsx'
import Todos from './components/Todos.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'

function App() {

  return (
    <Provider store={store}>
      <div className='px-20 py-10'>
        <div className='py-5'>
          <AddTodo/>
        </div>
        <Todos/>
      </div>
    </Provider>
  )
}

export default App
