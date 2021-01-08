import React, { Component } from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import './Experience.css';
import $ from 'jquery';


class Experience extends Component {
    constructor(props) {
    super(props);
    this.handleClick=this.handleClick.bind(this);
    
    this.state = {
      isClicked:false,
      isClickedTwo:false,
      isClickedThree:false,
      isClickedFour:false,
      isClickedFive:false,
      isClickedSix:false,
      isClickedSeven:false,
    };
  }

  handleClick(event){
    const id = event.currentTarget.id;
    if(id=="pone")
    this.setState(this.toggleClickState);  

    if(id=="ptwo")
    this.setState(this.toggleClickStateTwo);

    if(id=="pthree")
    this.setState(this.toggleClickStateThree);

    if(id=="pfour")
    this.setState(this.toggleClickStateFour);

    if(id=="pfive")
    this.setState(this.toggleClickStateFive);

    if(id=="psix")
    this.setState(this.toggleClickStateSix);

    if(id=="pseven")
    this.setState(this.toggleClickStateSeven);
  }
  
  toggleClickState(state) {
    return {
      isClicked: !state.isClicked,
    };
  }

  toggleClickStateTwo(state) {
    return {
      isClickedTwo: !state.isClickedTwo,
    };
  }

  toggleClickStateThree(state) {
    return {
      isClickedThree: !state.isClickedThree,
    };
  }

  toggleClickStateFour(state) {
    return {
      isClickedFour: !state.isClickedFour,
    };
  }

  toggleClickStateFive(state) {
    return {
      isClickedFive: !state.isClickedFive,
    };
  }
  
  toggleClickStateSix(state) {
    return {
      isClickedSix: !state.isClickedSix,
    };
  }
  toggleClickStateSeven(state) {
    return {
      isClickedSeven: !state.isClickedSeven,
    };
  }

 

    render() {

        return (
           <div className="app">
              <div className="gallery">
                <div className="bubbles" id="pone"
                  onClick={this.handleClick}
                  onMouseLeave={this.museLeave}>
                  <p id="textOne">Software Engineer <br/><br/>Fidelity Investments<br/><br/> August 2020 - Present</p>
                </div>
                {
                                  this.state.isClicked && 
                                  <div id="myList"> 
                                 I am currently participating in Fidelity Investments Leap Software Engineering Track.
                                  <br/>Training in this track includes: 
                                  <ul>
                                      <li id="item">Object Oriented Analysis and Design</li>
                                      <li id="item">Dynamic Web Development with Angular</li>
                                      <li id="item">Git/Stash Training</li>
                                      <li id="item">Java, SQLPL, SQL, JDBC</li>
                                      <li id="item">Relational and NoSQL DB Training</li>
                                      <li id="item">Mastering Spring and MyBatis</li>
                                      <li id="item">Restful Services w/ Java</li>
                                      <li id="item">Restful Services w/ Node.js</li>
                                  </ul>
                                  -	I am also working on a project with the cloud unit,
                                  <br/>building on my understand of cloud technologies from my internship: 
                                  <ul>
                                      <li id="item">Docker</li>
                                      <li id="item">Kubernetes</li>
                                      <li id="item">AWS</li>
                                  </ul>

                                  <b>TAP AGAIN TO CLOSE</b>
                                  </div>
                             
                              }
                
                <div className="bubbles">
                  <p id="textOne">Technical Operations<br/><br/>Sentenial <br/><br/>January 2020 – August 2020</p>
                </div>
                
                <div className="bubbles">
                  <p id="textOne">Construction Laborer/Machine Operator<br/><br/>Bennett Mechanical Installations (2001) Ltd<br/><br/> May 2018 – August 2019</p>
                </div>
                
                <div className="bubbles">
                  <p id="textOne">Urban Planning Internship<br/><br/>Tom Phillips & Associates<br/><br/> May 2016 – August 2016</p>
                </div>
                
                <div className="bubbles">
                  <p id="textOne">Internship - Software Testing<br/><br/>Sentenial<br/><br/> June 2015 – August 2015</p>
                </div>
                
                <div className="bubbles">
                  <p id="textOne">Sales Representative<br/><br/>Astra Marketing <br/><br/> Jan 2015 – May 2015</p>
                </div>
                
                <div id="bubblestwo">
                  <p id="textTwo">Click On A Bubble</p>
                </div>
                
                <div id="bubblestwo">
                  <p id="textTwo">Licenses</p>
                </div>
              </div>
           </div>
        );
    }
}

export default Experience;
