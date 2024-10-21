import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    constructor() {
        super()
        this.state = {
            search:""
        }
    }

    postSearch(e) {
        e.preventDefault()
        this.props.changeSearch(this.state.search)
        this.setState({ search: '' })
    }
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg background sticky-top">
                    <div className="container-fluid">
                        <Link className="navbar-brand text-light" onClick={()=>this.props.changeSearch("")} to="">News</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link text-light active" aria-current="page" to="/All">All</Link>
                                </li>
                                <li className="nav-item"><Link className="nav-link text-light" onClick={()=>this.props.changeSearch("")} to="/Politics">Politics</Link></li>
                                <li className="nav-item"><Link className="nav-link text-light" onClick={()=>this.props.changeSearch("")} to="/Crime">Crime</Link></li>
                                <li className="nav-item"><Link className="nav-link text-light" onClick={()=>this.props.changeSearch("")} to="/Education">Education</Link></li>
                                <li className="nav-item"><Link className="nav-link text-light" onClick={()=>this.props.changeSearch("")} to="/Entertainment">Entertainment</Link></li>
                                <li className="nav-item"><Link className="nav-link text-light" onClick={()=>this.props.changeSearch("")} to="/Politics">Politics</Link></li>
                                <li className="nav-item"><Link className="nav-link text-light" onClick={()=>this.props.changeSearch("")} to="/Technology">Technology</Link></li>
                                <li className="nav-item"><Link className="nav-link text-light" onClick={()=>this.props.changeSearch("")} to="/Games">Games</Link></li>
                                <li className="nav-item"><Link className="nav-link text-light" onClick={()=>this.props.changeSearch("")} to="/Olympics">Olympics</Link></li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle text-light text-decoration-underline" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Language
                                    </Link>
                        {/* To set language we are sending data from Navbar to App component (child to parent)
                        then App to Home component(parent to child) */}
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" onClick={()=>{this.props.changeLanguage1("hi")}} >Hindi</Link></li>
                                        <li><Link className="dropdown-item" onClick={()=>{this.props.changeLanguage1("en")}}>English</Link></li>
                                    </ul>
                                </li>
                            </ul>
                            <form className="d-flex" role="search" onSubmit={(e)=>{this.postSearch(e)}}>
                                <input className="form-control me-2" name="search" value={this.state.search} onChange={(e)=>this.setState({search:e.target.value})} type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-light" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}
