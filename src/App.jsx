import React from 'react'
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import ProductPage from './components/ProductPage'
import CartPage from './components/CartPage'
import { Toaster } from 'react-hot-toast'
import Card from './components/Card'
import Checkout from './components/Checkout'
import Navbar from './navbar/Navbar'
import BottomNavbar from './navbar/BottomNavbar'
import Navbar2 from './navbar/Navbar2'
import Menu from './Menu/Menu'
import Wishlist from './wishlist/Wishlist'
import ProductDetail from './components/ProductDetails'
import Preloader from './preloader/Preloader'
import Menu2 from './Menu/Menu2'
// import { Menu } from '@headlessui/react'

function App() {

  return (
    <div className="app">
      <div><Toaster position='top-center' reverseOrder={false} /></div>
      <BrowserRouter>
        <Navbar2 />
        {/* <Navbar /> */}
        <Routes>
          <Route path='/products' element={<ProductPage />} />
          <Route path='/' element={<Menu />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/card' element={<Card />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/ProductDetails' element={<ProductDetail />} />
          <Route path='/ProductDetails/:id' element={<ProductDetail />} />
          <Route path='/preloader' element={<Preloader />} />
          <Route path='/menu2' element={<Menu2 />} />
        </Routes>
        {/* <BottomNavbar /> */}
      </BrowserRouter>
    </div>
  )
}

export default App
