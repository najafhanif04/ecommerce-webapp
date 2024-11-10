import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import Contact from './pages/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Navbar />
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='about' element={<About/>} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
