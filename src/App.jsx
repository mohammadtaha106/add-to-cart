import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './pages/Product'
import Navbar from './components/Navbar'
import Cart from './pages/Cart'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    
    <Routes>

      <Route path='/' element={<Product/>}/>
      
      <Route path='/cart' element={<Cart/>}/>
     

    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
