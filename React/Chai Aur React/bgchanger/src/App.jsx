import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("Black")

  return (
    <div>
      <div className='card' style={{backgroundColor:color}}>
        Choose Color
      </div>
      <div className='but'>
        <button onClick={() => setColor('Green')}>Green</button>
        <button onClick={() => setColor('Blue')}>Blue</button>
        <button onClick={() => setColor('Black')}>Black</button>
        <button onClick={() => setColor('Gray')}>Gray</button>
        <button onClick={() => setColor('Red')}>Red</button>
      </div>
    </div>
  )
}

export default App
