import { useState } from 'react'
import './App.css'

import Welcome from './pages/Welcome'
import User from './pages/User'


function App() {

  const [showUser,setShowUser]=useState(false);

  const [showWelcome,setShowWelcome]=useState(true);
  return (
    <>
      {showWelcome&&(<Welcome setShowUser={setShowUser} setShowWelcome={setShowWelcome}/>)}
      {showUser&&(<User/>)}
      
    </>
  )
}

export default App
