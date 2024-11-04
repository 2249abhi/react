import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Partials/Navbar'
import Footer from './Partials/Footer'
import Home from './Home'

export default function App() {
  return (
    <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>} />
            </Routes>
        <Footer/>
    </BrowserRouter>
  )
}
