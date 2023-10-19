import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>

<header className="py-2 bg-warning bg-opacity-25">
  <div
    className="container-fluid d-grid gap-3 align-items-center"
    style={{ gridTemplateColumns: "1fr 2fr" }}
  >
    <div className="dropdown">
      <a
        to="/"
        className="d-flex align-items-center col-lg-4 mb-2 mb-lg-0 link-body-emphasis text-decoration-none"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img style={{height:"50px", width:"60px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvZC-y9VZviHsJTJivuh0ZfkGhzRDJrbVpsQ&usqp=CAU" alt="" />
      </a>
      <ul className="dropdown-menu text-small shadow" style={{}}>
        <li>
          <Link className="dropdown-item " to="/Home" aria-current="page">
            Home
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to="/Gallery">
            Gallery
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to="/About">
            About
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to="/Contact">
            Contact
          </Link>
        </li>
       
      </ul>
    </div>
    <div className="d-flex align-items-center justify-content-end">
      <form className="w-50 me-3" role="search">
        <input style={{border:"none",}} 
          type="search"
          className="form-control bg-light px-4  bg-opacity-25"
          placeholder="Search..."
          aria-label="Search"
        />
      </form>
      
      <div className="flex-shrink-0 dropdown ">
        <a
          to="/"
          className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt="mdo"
            width={32}
            height={32}
            className="rounded-circle"
          />
        </a>
        <ul className="dropdown-menu text-small shadow" style={{}}>
          <li>
        
            <Link className="dropdown-item" to="/">
              Profile
            </Link>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <Link className="dropdown-item" to="/">
              Sign out
            </Link>
          </li>
        </ul>
      </div>
    </div>
    </div>
</header>


    </div>
  )
}

export default Navbar