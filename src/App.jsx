import React from 'react'
import './App.css'
import { Footer, Header, ProductCard } from './Components'

import { NavLink, Route, Routes } from 'react-router-dom'
import { useCustomContext } from './ContextProvider/ContextProvider'
import { CartPage, ContactPage, DetailPage, HomePage } from './screens'

function App() {

  return (
    <div>
      <Header/> 
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/detail/:id' element={<DetailPage/>} />
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
      </Routes>
    </div>
  )
}

export default App
