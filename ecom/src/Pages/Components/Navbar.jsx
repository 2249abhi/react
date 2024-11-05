import React from 'react'

export default function Navbar() {
    return (
        <>
            {/* <!-- Topbar Start --> */}
            <div className="container-fluid topbar px-0 px-lg-4 bg-light py-2 d-none d-lg-block">
                <div className="container">
                    <div className="row gx-0 align-items-center">
                        <div className="col-lg-8 text-center text-lg-start mb-lg-0">
                            <div className="d-flex flex-wrap">
                                <div className="border-end border-primary pe-3">
                                    <a href="#" className="text-muted small"><i className="fas fa-map-marker-alt text-primary me-2"></i>Find A Location</a>
                                </div>
                                <div className="ps-3">
                                    <a href="mailto:example@gmail.com" className="text-muted small"><i className="fas fa-envelope text-primary me-2"></i>example@gmail.com</a>
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
                            <h1 className="text-primary mb-0"><i className="fab fa-slack me-2"></i> LifeSure</h1>
                            {/* <!-- <img src="img/logo.png" alt="Logo"> --> */}
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="fa fa-bars"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav mx-0 mx-lg-auto">
                                <a href="index.html" className="nav-item nav-link active">Home</a>
                                <a href="about.html" className="nav-item nav-link">About</a>
                                <a href="service.html" className="nav-item nav-link">Services</a>
                                <a href="blog.html" className="nav-item nav-link">Blog</a>
                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link" data-bs-toggle="dropdown">
                                        <span className="dropdown-toggle">Pages</span>
                                    </a>
                                    <div className="dropdown-menu">
                                        <a href="feature.html" className="dropdown-item">Our Features</a>
                                        <a href="team.html" className="dropdown-item">Our team</a>
                                        <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                        <a href="FAQ.html" className="dropdown-item">FAQs</a>
                                        <a href="404.html" className="dropdown-item">404 Page</a>
                                    </div>
                                </div>
                                <a href="contact.html" className="nav-item nav-link">Contact</a>
                                <div className="nav-btn px-3">
                                    <button className="btn-search btn btn-primary btn-md-square rounded-circle flex-shrink-0" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fas fa-search"></i></button>
                                    <a href="#" className="btn btn-primary rounded-pill py-2 px-4 ms-3 flex-shrink-0"> Get a Quote</a>
                                </div>
                            </div>
                        </div>
                        <div className="d-none d-xl-flex flex-shrink-0 ps-4">
                            <a href="#" className="btn btn-light btn-lg-square rounded-circle position-relative wow tada" data-wow-delay=".9s">
                                <i className="fa fa-phone-alt fa-2x"></i>
                                <div className="position-absolute" style={{top:"7px",right:"12px"}}>
                                    <span><i className="fa fa-comment-dots text-secondary"></i></span>
                                </div>
                            </a>
                            <div className="d-flex flex-column ms-3">
                                <span>Call to Our Experts</span>
                                <a href="tel:+ 0123 456 7890"><span className="text-dark">Free: + 0123 456 7890</span></a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/* <!-- Navbar & Hero End --> */}
        </>
    )
}
