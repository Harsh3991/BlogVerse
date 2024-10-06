import { useState } from 'react'
import './App.css'
import Profile from './components/Auth/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Profile/>
    </>
  )
}

export default App
