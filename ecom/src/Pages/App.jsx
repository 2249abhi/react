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

import Maincategory from './Admin/Maincategory/Maincategory'
import CreateMaincategory from './Admin/Maincategory/CreateMaincategory'
import UpdateMaincategory from './Admin/Maincategory/UpdateMaincategory'

import Subcategory from './Admin/Subcategory/Subcategory'
import CreateSubcategory from './Admin/Subcategory/CreateSubcategory'
import UpdateSubcategory from './Admin/Subcategory/UpdateSubcategory'

import ListBrand from './Admin/Brand/ListBrand'
import CreateBrand from './Admin/Brand/CreateBrand'
import UpdateBrand from './Admin/Brand/UpdateBrand'

import ListTestimonial from './Admin/Testimonial/ListTestimonial'
import CreateTestimonial from './Admin/Testimonial/CreateTestimonial'
import UpdateTestimonial from './Admin/Testimonial/UpdateTestimonial'



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
                <Route path='/admin/maincategory' element={<Maincategory/>} />
                <Route path='/admin/maincategory/create' element={<CreateMaincategory/>} />
                <Route path='/admin/maincategory/update/:id' element={ <UpdateMaincategory/> } />
                
                <Route path='/admin/subcategory' element={<Subcategory/>} />
                <Route path='/admin/subcategory/create' element={<CreateSubcategory/>} />
                <Route path='/admin/subcategory/update/:id' element={ <UpdateSubcategory/> } />

                <Route path='/admin/brand' element={<ListBrand/>} />
                <Route path='/admin/brand/create' element={<CreateBrand/>} />
                <Route path='/admin/brand/update/:id' element={ <UpdateBrand/> } />

                <Route path='/admin/testimonial' element={<ListTestimonial/>} />
                <Route path='/admin/testimonial/create' element={<CreateTestimonial/>} />
                <Route path='/admin/testimonial/update/:id' element={ <UpdateTestimonial/> } />
                
                

            </Routes>
        <Footer/>
    </BrowserRouter>
  )
}
