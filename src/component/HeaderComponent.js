import React, { Component } from 'react';
import './HeaderComponent.css';
import { NavLink } from 'react-router-dom';

class HeaderComponent extends Component {
    render() {
        return (
            <header>
                <h1>Website Title</h1>
                <p>Website slogan included here.</p>
                <nav className="site-nav">
                    <ul className="group">
                        <li><NavLink to='/' exact activeStyle={{ backgroundColor: '#e5e9dc' }}>Gallary</NavLink></li>
                        <li><NavLink to='/groceries' exact
                         isActive={(match, location) => {
                            if (match) {
                              return true;
                            } else if(location.pathname.includes('grocery')) {
                                return true;
                            }
                          }}
                         activeStyle={{  backgroundColor: '#e5e9dc'}}>Groceries</NavLink></li>
                        <li><NavLink to='/about' exact activeStyle={{  backgroundColor: '#e5e9dc' }}>About</NavLink></li>
                        <li><NavLink to='/forminput' exact activeStyle={{  backgroundColor: '#e5e9dc' }}>Form Input</NavLink></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default HeaderComponent;