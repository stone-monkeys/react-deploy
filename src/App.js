import React, { Component } from 'react';
import './App.css';
import Home from './Home.js';
import Dropdown from './Navbar.js'
import Navbar from './Navbar.js';
import {BrowserRouter as Router, HashRouter, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import initFontAwesome from "./initFontAwesome"; 

initFontAwesome();

class App extends Component {
  render() {
    return (

      <HashRouter >
            <div className="app">
            <Navbar></Navbar>
              <Route path="/" exact strict render={
          () => {
            return (
            <div className="homePage">
            
             <Home></Home>
            

            </div>);
          }
        }/>
        
            </div>
        
      </HashRouter >

    );
  }
}

export default App;
