import React, { Component } from 'react';
import GroceryListContainer from './grocery/GroceryListContainer';
import Gallary from './galarry/Gallary';
import FormInput from './FormInput';
import About from './About';

import './Content.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";

class Content extends Component {
    render() {
        return (
            <>
                <div className="content-area group">
                    <div className="main-area">
                        <Switch>
                            <Route exact strict path="/" component={Gallary} />
                            <Route exact strict path="/groceries" component={GroceryListContainer} />
                            <Route exact strict path="/grocery" component={GroceryListContainer} />
                            <Route exact strict path="/about" component={About} />
                            <Route exact strict path="/forminput" component={FormInput} />
                        </Switch>
                    </div>
                </div>
            </>
        );
    }
}

export default Content;