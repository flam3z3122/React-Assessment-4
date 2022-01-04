import React from "react";
import { Link } from "react-router-dom";


const Header = () =>{
    return(
        <div className="navbar navbar-dark bg-dark " >
            <Link to="/home" className="nav-link Link" >Home</Link>
            <Link to="/students"  className="nav-link Link" >Students</Link>
            <Link to="/contact" className="nav-link Link">Contact Us</Link>

        </div>
    )
}
export default Header