import './App.css'
import Example from './components/Navbar'
import Card from './components/Card'

function App() {

  return (
    <div>
      <Example/>
      <Card name='H&M'/>
      <Card name='Zudio'/>
      <Card name='Max'/>
      <Card name='Park Avenue'/>
    </div>
  )
}

export default App
