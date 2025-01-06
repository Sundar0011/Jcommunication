import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Welcome from './pages/Welcome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Welcome/>
      
    </>
  )
}

export default App
