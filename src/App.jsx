
import { Routes,Route } from 'react-router-dom'
import './App.css'
import { Homepage } from './pages/Homepage'
import { useState } from 'react'

function App() {
    const [isWhite, setIsWhite]= useState(true)
    function handleColorChange()
    {
      setIsWhite(prev=> !prev)

    }

  return (

  <Routes>
   <Route path="/" element={<Homepage
   
    isWhite={isWhite}
    onToggleTheme={handleColorChange} 
   
   />}></Route>
  </Routes>

  )
}

export default App
