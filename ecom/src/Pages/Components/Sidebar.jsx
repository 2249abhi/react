import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
    return (
        <>
            <div className="list-group">
                <NavLink to="/" className="list-group-item bg-primary text-light mb-1"><i className="fa fa-home fs-4"></i><span className='float-end'>Home</span></NavLink>
                <NavLink to="/admin/maincategory" className="list-group-item bg-primary text-light mb-1"><i className="fa fa-list fs-4"></i><span className='float-end'>Main Category</span></NavLink>
                <NavLink to="/admin/subcategory" className="list-group-item bg-primary text-light mb-1"><i className="fa fa-list fs-4"></i><span className='float-end'>Sub Category</span></NavLink>
                <NavLink to="/admin/brand" className="list-group-item bg-primary text-light mb-1"><i className="fa fa-list fs-4"></i><span className='float-end'>Brand</span></NavLink>
                <NavLink to="/admin/product" className="list-group-item bg-primary text-light mb-1"><i className="fa fa-list fs-4"></i><span className='float-end'>Product</span></NavLink>
                <NavLink to="/admin/testimonial" className="list-group-item bg-primary text-light mb-1"><i className="fa fa-star fs-4"></i><span className='float-end'>Testimonials</span></NavLink>
                <NavLink to="/" className="list-group-item bg-primary text-light mb-1"><i className="fa fa-user fs-4"></i><span className='float-end'>Users</span></NavLink>
                <NavLink to="/" className="list-group-item bg-primary text-light mb-1"><i className="fa fa-envelope fs-4"></i><span className='float-end'>Newsletter</span></NavLink>
                <NavLink to="/" className="list-group-item bg-primary text-light mb-1"><i className="fa fa-phone fs-4"></i><span className='float-end'>Contact Us</span></NavLink>
                <NavLink to="/" className="list-group-item bg-primary text-light mb-1"><i className="fa fa-shopping-bag fs-4"></i><span className='float-end'>Checkout</span></NavLink>
            </div>
        </>
    )
}
