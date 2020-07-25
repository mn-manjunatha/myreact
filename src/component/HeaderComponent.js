import React, { Component } from 'react';
import './HeaderComponent.css';
import { Link, NavLink } from 'react-router-dom';

class HeaderComponent extends Component {
    render() {
        return (
            <header>
                <h1>Website Title</h1>
                <p>Website slogan included here.</p>

                <nav className="site-nav">
                    <ul className="group">
                        <li><NavLink to='/home' exact activeStyle={{ color: '#a832a6' }}>Home</NavLink></li>
                        <li><NavLink to='/gracery' exact activeStyle={{ color: '#a832a6' }}>Gracery</NavLink></li>
                        <li><NavLink to='/about' exact activeStyle={{ color: '#a832a6' }}>About</NavLink></li>
                        <li><NavLink to='/userProfile' exact activeStyle={{ color: '#a832a6' }}>Contact Us</NavLink></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default HeaderComponent;