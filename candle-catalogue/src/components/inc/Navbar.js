import React from 'react';
import { NavLink } from 'react-router-dom';
import ss from "../images/ss.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar-color">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand d-flex align-items-center">
          <img src={ss} alt="logo" id="logos" width="40px" height="40px" className="me-2" />
          <span className="align-middle" style={{color:'#d63384',fontSize : '23px',fontFamily:'"Playwrite PL", cursive', fontWeight:'bold'}}>Giftmili</span>
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link" activeClassName="active"  style={{color:'#d63384',fontSize : '23px',fontFamily:'"Playwrite PL", cursive' ,fontWeight:'bold'}}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link" activeClassName="active"  style={{color:'#d63384',fontSize : '23px',fontFamily:'"Playwrite PL", cursive', fontWeight:'bold'}}>About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link" activeClassName="active"  style={{color:'#d63384',fontSize : '23px',fontFamily:'"Playwrite PL", cursive', fontWeight:'bold'}}>Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/products" className="nav-link" activeClassName="active"  style={{color:'#d63384',fontSize : '23px',fontFamily:'"Playwrite PL", cursive', fontWeight:'bold'}}>Products</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
