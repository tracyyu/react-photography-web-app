import React, { Component } from 'react';
import {Route, Switch, NavLink} from 'react-router-dom';

const Navigation = props => {
    return(
        <div className="container">
            <nav className="nav avbar-expand-lg navbar-dark justify-content-center">
                <NavLink className="nav-link" to="/">Home</NavLink>
                <NavLink className="nav-link" to="/main/portfolio">Portfolio</NavLink>
                <NavLink className="nav-link" to="/main/beforeafter">Before & After</NavLink>
                <NavLink className="nav-link" to="/main/about">About</NavLink>
                <NavLink className="nav-link" to="/main/contact">Contact</NavLink>
            </nav>
        </div>
    );
}

export default Navigation;