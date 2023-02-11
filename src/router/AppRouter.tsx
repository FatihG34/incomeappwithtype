import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navabar from '../components/Navabar'
import Home from '../pages/Home'

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Navabar/>
    <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>
      
    </BrowserRouter>
  )
}

export default AppRouter
