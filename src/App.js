import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderComponent from './component/HeaderComponent';
import Content from './component/Content';
import { Provider } from "react-redux";
import store from "./redux/store"
import {
  BrowserRouter as Router,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <div className="container">
        <Router >
          <HeaderComponent />
          <Provider store={store}>
            <Content />
          </Provider>
        </Router>
        <footer>
          <p>&copy; 2020 - This is the footer.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
