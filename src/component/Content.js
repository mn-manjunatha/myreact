import React, { Component } from 'react';
import GraceryListContainer from './gracery/GraceryListContainer';
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
                            <Route exact strict path="/groceries" component={GraceryListContainer} />
                            <Route exact strict path="/gracery" component={GraceryListContainer} />
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