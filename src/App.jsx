import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store/addToCart/cartSlice";
import ProductDetail from './pages/DetailPage'

function App() {
  const [count, setCount] = useState(0)

  const dispatch = useDispatch();
  const selector = useSelector((state) => state.cart.product);

  const handleCart = (image, price) => {
    const product = {
      image,
      price,
    };

    dispatch(addToCart(product));
  };

  return (
    <>
      
      <Navbar />
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='about' element={<About/>} />
          <Route path='contact' element={<Contact />} />
          <Route path=":id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
