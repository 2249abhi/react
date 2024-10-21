import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        return (
            <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6'>
                <div className="card">
                    <img className="card-img-top" height={200} width="100%" src={this.props.image} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{this.props.title}</h5>
                            <p className="card-text">{this.props.description}</p>
                            <a href={this.props.url} target="_blank" className="btn btn-primary w-100 background">Read Full Article</a>
                        </div>
                </div>
            </div>
        )
    }
}
