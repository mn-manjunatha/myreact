import React, { Component } from 'react';
import './FormInput.css';

class FormInput extends Component {
    render() {
        return (
            <div className="formMain">
                <h2>Main Column Heading</h2>
                <p>This is the main area (or column). Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.</p>
                <form>
                    <label htmlFor="email" className="hidden-label">Email</label>
                    <input type="email" name="email" id="email" placeholder="Email" />
                    <label htmlFor="password" className="hidden-label">Password</label>
                    <input type="password" name="password" id="password" placeholder="Password" />
                    <select>
                        <option>Initially view...</option>
                        <option>My Profile</option>
                        <option>Inbox</option>
                        <option>Account Settings</option>
                    </select>
                    <input type="submit" value="Sign In" />
                    <label>
                        <input type="checkbox" name="remember" checked="checked" value="yes" />
                        <span className="checkbox-text">Stay signed in</span>
                    </label>
                </form>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. In reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        );
    }
}

export default FormInput;