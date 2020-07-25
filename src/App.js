import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderComponent from './component/HeaderComponent';
import Content from './component/Content';
import {
  BrowserRouter as Router,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
   <div className="container">
   <Router >
       <HeaderComponent/>
       <Content/>
       </Router>    
        <footer>
          <p>&copy; 2020 - This is the footer.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
