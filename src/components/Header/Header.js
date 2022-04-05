import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
        <div>
            <h2 className='header'>Welcome to your dream library!!!</h2>
            <nav className='header-container'>
                <Link to="/">Home</Link>
                <Link to="/reviews">Reviews</Link>
                <Link to="/dashboard">DashBoard</Link>
                <Link to="/blog">Blog</Link>
            </nav>
        </div>
    );
};

export default Header;