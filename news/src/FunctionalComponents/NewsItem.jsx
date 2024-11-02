import React from 'react'

export default function NewsItem(props) {
  return (
    <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6'>
                <div className="card">
                    <img className="card-img-top" height={200} width="100%" src={props.image} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">{props.description}</p>
                            <a href={props.url} target="_blank" className="btn btn-primary w-100 background">Read Full Article</a>
                        </div>
                </div>
            </div>
  )
}
