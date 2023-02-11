import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navabar from '../components/Navabar'
import Home from '../pages/Home'
import IncomeDetail from '../pages/IncomeDetail'

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Navabar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/income' element={<IncomeDetail/>}/>
    </Routes>
      
    </BrowserRouter>
  )
}

export default AppRouter
