import React from 'react'

export default function ProductComponent() {
  return (
    <>
        <div className="container-fluid blog py-5">
            <div className="container py-5">
                <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth: "800px"}}>
                    <h4 className="text-primary">From Blog</h4>
                    <h1 className="display-4 mb-4">News And Updates</h1>
                    <p className="mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci facilis cupiditate recusandae aperiam temporibus corporis itaque quis facere, numquam, ad culpa deserunt sint dolorem autem obcaecati, ipsam mollitia hic.
                    </p>
                </div>
                <div className="row g-4 justify-content-center">
                    <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="blog-item">
                            <div className="blog-img">
                                <img src="img/blog-1.png" className="img-fluid rounded-top w-100" alt=""/>
                                <div className="blog-categiry py-2 px-4">
                                    <span>Business</span>
                                </div>
                            </div>
                            <div className="blog-content p-4">
                                <div className="blog-comment d-flex justify-content-between mb-3">
                                    <div className="small"><span className="fa fa-user text-primary"></span> Martin.C</div>
                                    <div className="small"><span className="fa fa-calendar text-primary"></span> 30 Dec 2025</div>
                                    <div className="small"><span className="fa fa-comment-alt text-primary"></span> 6 Comments</div>
                                </div>
                                <a href="#" className="h4 d-inline-block mb-3">Which allows you to pay down insurance bills</a>
                                <p className="mb-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius libero soluta impedit eligendi? Quibusdam, laudantium.</p>
                                <a href="#" className="btn p-0">Read More  <i className="fa fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.4s">
                        <div className="blog-item">
                            <div className="blog-img">
                                <img src="img/blog-2.png" className="img-fluid rounded-top w-100" alt=""/>
                                <div className="blog-categiry py-2 px-4">
                                    <span>Business</span>
                                </div>
                            </div>
                            <div className="blog-content p-4">
                                <div className="blog-comment d-flex justify-content-between mb-3">
                                    <div className="small"><span className="fa fa-user text-primary"></span> Martin.C</div>
                                    <div className="small"><span className="fa fa-calendar text-primary"></span> 30 Dec 2025</div>
                                    <div className="small"><span className="fa fa-comment-alt text-primary"></span> 6 Comments</div>
                                </div>
                                <a href="#" className="h4 d-inline-block mb-3">Leverage agile frameworks to provide</a>
                                <p className="mb-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius libero soluta impedit eligendi? Quibusdam, laudantium.</p>
                                <a href="#" className="btn p-0">Read More  <i className="fa fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="blog-item">
                            <div className="blog-img">
                                <img src="img/blog-3.png" className="img-fluid rounded-top w-100" alt=""/>
                                <div className="blog-categiry py-2 px-4">
                                    <span>Business</span>
                                </div>
                            </div>
                            <div className="blog-content p-4">
                                <div className="blog-comment d-flex justify-content-between mb-3">
                                    <div className="small"><span className="fa fa-user text-primary"></span> Martin.C</div>
                                    <div className="small"><span className="fa fa-calendar text-primary"></span> 30 Dec 2025</div>
                                    <div className="small"><span className="fa fa-comment-alt text-primary"></span> 6 Comments</div>
                                </div>
                                <a href="#" className="h4 d-inline-block mb-3">Leverage agile frameworks to provide</a>
                                <p className="mb-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius libero soluta impedit eligendi? Quibusdam, laudantium.</p>
                                <a href="#" className="btn p-0">Read More  <i className="fa fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
