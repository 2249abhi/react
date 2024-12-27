import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

export default function Navbar() {
    let navigate = useNavigate()
    function logout() {
        localStorage.removeItem("login")
        localStorage.removeItem("name")
        localStorage.removeItem("email")
        localStorage.removeItem("userid")
        localStorage.removeItem("role")
        navigate("/login")
    }
    return (
        <>
            {/* <!-- Topbar Start --> */}
            <div className="container-fluid topbar px-0 px-lg-4 bg-light py-2">
                <div className="container">
                    <div className="row gx-0 align-items-center">
                        <div className="col-lg-8 text-center text-lg-start mb-lg-0">
                            <div className="d-flex flex-wrap">
                                <div className="ps-3">
                                    <a href="tel:+919711493272" className="text-muted small"><i className="fas fa-phone-alt text-primary me-2"></i>9711493272</a>&nbsp; 
                                    <a href="mailto:abhishekshr7@gmail.com" className="text-muted small"><i className="fas fa-envelope text-primary me-2"></i>abhishekshr7@gmail.com</a>&nbsp;
                                    <a href="http://wa.me/+919711493272" className="text-muted small"><i className="fab fa-whatsapp text-primary me-2"></i>9711493272</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 text-center text-lg-end">
                            <div className="d-flex justify-content-end">
                                <div className="d-flex border-end border-primary pe-3">
                                    <a className="btn p-0 text-primary me-3" href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn p-0 text-primary me-3" href="#"><i className="fab fa-twitter"></i></a>
                                    <a className="btn p-0 text-primary me-3" href="#"><i className="fab fa-instagram"></i></a>
                                    <a className="btn p-0 text-primary me-0" href="#"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                                <div className="dropdown ms-3">
                                    <a href="#" className="dropdown-toggle text-dark" data-bs-toggle="dropdown"><small><i className="fas fa-globe-europe text-primary me-2"></i> English</small></a>
                                    <div className="dropdown-menu rounded">
                                        <a href="#" className="dropdown-item">English</a>
                                        <a href="#" className="dropdown-item">Bangla</a>
                                        <a href="#" className="dropdown-item">French</a>
                                        <a href="#" className="dropdown-item">Spanish</a>
                                        <a href="#" className="dropdown-item">Arabic</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Topbar End --> */}

            {/* <!-- Navbar & Hero Start --> */}
            <div className="container-fluid nav-bar px-0 px-lg-4 py-lg-0">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <a href="#" className="navbar-brand p-0">
                            <h1 className="text-primary mb-0"><i className="fas fa-shopping-cart me-2"></i> India-Mart</h1>
                            {/* <!-- <img src="img/logo.png" alt="Logo"> --> */}
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="fa fa-bars"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav mx-0 mx-lg-auto">
                                <NavLink to="/" className="nav-item nav-link">Home</NavLink>
                                <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                                <NavLink to="/shop" className="nav-item nav-link">Shop</NavLink>
                                <NavLink to="/features" className="nav-item nav-link">Features</NavLink>
                                <NavLink to="/testimonials" className="nav-item nav-link">Testimonials</NavLink>
                                <NavLink to="/contactus" className="nav-item nav-link">Contact</NavLink>
                                <NavLink to="/admin" className="nav-item nav-link">Admin</NavLink>
                                {/* <div className="nav-btn px-3">
                                    <button className="btn-search btn btn-primary btn-md-square rounded-circle flex-shrink-0" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fas fa-search"></i></button>
                                    <a href="#" className="btn btn-primary rounded-pill py-2 px-4 ms-3 flex-shrink-0"> Get a Quote</a>
                                </div> */}
                            </div>
                        </div>
                        <div className="d-none d-xl-flex flex-shrink-0 ps-4">

                            {
                                localStorage.getItem("login") ? 
                                <>
                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link" data-bs-toggle="dropdown">
                                        <span className="dropdown-toggle">{ localStorage.getItem("name") }</span>
                                    </a>
                                    <div className="dropdown-menu">
                                        {
                                            localStorage.getItem('role') === 'Buyer' ?
                                            <>
                                                <Link to="/profile" className="dropdown-item">Profile</Link>    
                                                <Link to="/cart" className="dropdown-item">Cart</Link>
                                                <Link to="/checkout" className="dropdown-item">Checkout</Link>
                                            </>
                                            :
                                            <Link to="/profile" className="dropdown-item">Profile</Link>    
                                            
                                        }
                                        <button onClick={logout} className="dropdown-item">Logout</button>
                                    </div>
                                </div>
                                </> :
                                <NavLink to="/login" className='btn btn-primary rounded-pill py-3 px-5'>Login</NavLink>
                            }
                            


                        </div>
                    </nav>
                </div>
            </div>
            {/* <!-- Navbar & Hero End --> */}
        </>
    )
}
