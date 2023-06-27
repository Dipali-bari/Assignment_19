import './Header.css';
import {Link} from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';



function Header(){

    
    return(
        <div className="nav"> 
            <div className="logo">
                <img src="https://classes.geekster.in/images/logo/Geekster.svg" alt="logo"/> 
                
            </div>
            <div className="menu">
                <Link to="/">Home</Link>
                <Link to="/product"  >Product</Link >
                <Link to="/profile">Add to Cart</Link>
                {/* <Link to="/contactus">contactUs</Link> */}
            </div>
        </div>
    );
}
export default Header;