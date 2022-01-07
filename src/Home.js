import React, { Component } from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import './Home.css';
import About from './About.js';
import Background from './assets/Toronto.jpg';
import Navbar from './Navbar.js';

class Home extends Component {

  render() {
    return (
      <div className="app">
        <div className="homePage">
          <div id="profile-photo"></div>
            <div id="name">Derry Bradley</div>
              <div id="occupation">Solutions/Software Engineer</div> 
        </div>
      </div>
    );
  }
}

export default Home;
