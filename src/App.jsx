import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from './pages/Products'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/productdetails/:id' element={<Products />}/>
      </Routes>
    </div>
  )
}

export default App