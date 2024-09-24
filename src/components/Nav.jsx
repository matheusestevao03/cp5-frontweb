import React from 'react';
import { Link } from 'react-router-dom';
import { NavStyle } from '../css/NavStyle';
import { Helmet } from 'react-helmet';

const Nav = () => {
    return (
        <NavStyle>
            <Helmet>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap" rel="stylesheet" />
            </Helmet>
            <nav>
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/login" className="nav-link">Login</Link>
            </nav>
        </NavStyle>
    );
}

export default Nav;
