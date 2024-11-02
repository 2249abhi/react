import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom';

export default function Navbar(props) {

  let [search, setSearch] = useState("")

  function postSearch(e) {
    e.preventDefault();
    console.log(search);
    setSearch("")
    Navigate(`/${search}`)
  }


  
  return (
    <>
      <nav className="navbar navbar-expand-lg background sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand text-light" onClick={() => props.changeSearch("")} to="">News</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-light active" aria-current="page" onClick={()=>props.changeSearch("")} to="/All">All</Link>
              </li>
              <li className="nav-item"><Link className="nav-link text-light"  onClick={()=>props.changeSearch("")} to="/Politics">Politics</Link></li>
              {/* onClick={() => props.changeSearch("")} */}
              <li className="nav-item"><Link className="nav-link text-light" onClick={()=>props.changeSearch("")} to="/Crime">Crime</Link></li>
              <li className="nav-item"><Link className="nav-link text-light" onClick={()=>props.changeSearch("")} to="/Education">Education</Link></li>
              <li className="nav-item"><Link className="nav-link text-light" onClick={()=>props.changeSearch("")} to="/Entertainment">Entertainment</Link></li>
              <li className="nav-item"><Link className="nav-link text-light" onClick={()=>props.changeSearch("")} to="/Technology">Technology</Link></li>
              <li className="nav-item"><Link className="nav-link text-light" onClick={()=>props.changeSearch("")} to="/Games">Games</Link></li>
              <li className="nav-item"><Link className="nav-link text-light" onClick={()=>props.changeSearch("")} to="/Olympics">Olympics</Link></li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle text-light text-decoration-underline" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Language
                </Link>
                {/* To set language we are sending data from Navbar to App component (child to parent)
                        then App to Home component(parent to child) */}
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" onClick={() => { props.changeLanguage("hi") }} >Hindi</Link></li>
                  <li><Link className="dropdown-item" onClick={() => { props.changeLanguage("en") }}>English</Link></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={(e) => { postSearch(e) }}>
              <input className="form-control me-2" name="search" value={search} onChange={(e) => setSearch(e.target.value)} type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}
