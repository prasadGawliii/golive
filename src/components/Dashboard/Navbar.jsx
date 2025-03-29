
import React from 'react';
import { Link,useLocation } from "react-router-dom";
import Logo from './DashboardAssets/cart4.svg';
import './Navbar.css';

const Navbar = () => {

    
        const location = useLocation();
        
    return (
<nav className="navbar navbar-expand-lg px-3 w-100" style={{ backgroundColor: "rgb(255, 204, 102)", padding: "12px 20px" }}>
    <div className="container-fluid d-flex align-items-center">

        {/* Logo & Brand Name */}
        <div className="d-flex align-items-center">
            <img src={Logo} alt="logo" style={{ height: "30px" }} className="me-2" />
            <h2 style={{ color: "black", padding: "5px 5px", marginBottom: "0px" }} className="me-3">
                E-Commerce
            </h2>

            {/* Products Button (Shown on Large Screens) */}
            <div className="d-none d-lg-block">
                <Link to="/productsList">
                    <button className="btn btn-primary">Products</button>
                </Link>
            </div>
        </div>

        {/* Navbar Toggler Button for Mobile */}
        <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Navbar Items */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <div className="d-flex flex-column flex-lg-row align-items-center gap-2">

                {/* Products Button (Only Visible in Mobile View) */}
                <div className="d-block d-lg-none">
                    <Link to="/productsList">
                        <button className="btn btn-primary">Products</button>
                    </Link>
                </div>

                {/* Auth Buttons */}
                <Link to="/login">
                    <button className="btn btn-success">Login</button>
                </Link>
                <Link to="/register">
                    <button className="btn btn-light">Register</button>
                </Link>
                {location.pathname !== "/" && (
        <Link to="/">
          <button className="btn btn-dark">Home</button>
        </Link>
      )}
            </div>
        </div>
    </div>
</nav>

    );
}

export default Navbar;
