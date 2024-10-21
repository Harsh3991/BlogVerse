import { useState } from 'react'
import './App.css'
import CreateBlog from './components/Blog/CreateBlog';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CreateBlog/>
    </>
  )
}

export default App
