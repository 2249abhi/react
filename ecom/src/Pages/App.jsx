import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import ShopPage from './ShopPage'
import FeaturesPage from './FeaturesPage'
import TestimonialsPage from './TestimonialsPage'
import Error404Page from './Error404Page'
import ContactUsPage from './ContactUsPage'
import AdminHome from './Admin/Home/AdminHome'
import MainCategory from './Admin/MainCategory/MainCategory'
import CreateMainCategory from './Admin/MainCategory/CreateMainCategory'
import UpdateMainCategory from './Admin/MainCategory/UpdateMainCategory'



export default function App() {
  return (
    <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path='/about' element={<AboutPage/>} />
                <Route path='/shop' element={<ShopPage />} />
                <Route path='/features' element={<FeaturesPage />} />
                <Route path='/testimonials' element={<TestimonialsPage />} />
                <Route path='/contactus' element={<ContactUsPage />} />
                <Route path='/*' element={<Error404Page />} />

                {/* Admin Pages */}
                <Route path='/admin' element={<AdminHome />} />
                <Route path='/admin/maincategory' element={<MainCategory/>} />
                <Route path='/admin/maincategory/create' element={<CreateMainCategory/>} />
                <Route path='/admin/maincategory/update/:id' element={ <UpdateMainCategory/> } />
                

            </Routes>
        <Footer/>
    </BrowserRouter>
  )
}
