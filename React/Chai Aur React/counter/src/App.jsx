import './App.css'
import React from 'react'

function App() {
  const [word,setWord] = React.useState(0)
  return (
    <div>
      <div>Count: {word}</div>
      <button onClick={() => { if(word < 20) setWord(word+1)}}>Increase</button>
      <button onClick={() => { if(word > 0) setWord(word-1)}}>Decrease</button>
    </div>
  )
}

export default App
