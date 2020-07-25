import React, { Component } from 'react';
import GraceryList from './GraceryList'
import About from './About'
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
                    <Route exact strict path="/home" component={GraceryList} />
                    <Route exact strict path="/gracery" component={GraceryList} />
                    <Route exact strict path="/about" component={About} />
                </Switch>
            </div>
          </div>
          </>
        );
    }
}

export default Content;