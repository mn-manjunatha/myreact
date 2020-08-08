import React from 'react';
import './App.css';
import HeaderComponent from './component/HeaderComponent';
import Content from './component/Content';
import { Provider } from "react-redux";
import store from "./redux/store"
import {
 Router ,
} from "react-router-dom";
import { createBrowserHistory } from "history"

export const history = createBrowserHistory()

function App() {
  return (
    <div className="App">
      <div className="container">
        <Router history={history}>
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
