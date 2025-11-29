import { useState } from 'react'
import './App.css'
import Login from './login.jsx'
import Register from './register.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Register />
    </>
  )
}

export default App
