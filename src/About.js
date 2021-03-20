import React, { Component } from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import './About.css';



class About extends Component {

    

    render() {
        
        
           

        return (
           <div className="app">
               <div className="aboutMe"> 
               
                        <p id="pone">
                            Hi! I’m Derry and I am a Software Engineer working with the Cloud Computing unit in Fidelity Investments. 
                            As an Under-Grad, I studied Geography(Urbanization) & Economics at Maynooth University.
                        </p>
                            
                        <p id="pone"> 
                            Here I developed a strong interest in the application of technology in the urban realm, 
                            in particular its use in solving human-centric problems. 
                            My thesis sought to identify the extent in which digital platforms can be used in cities with regard to optimising the use of space, by enabling the 
                            efficient use of idle assets. I am very passionate about systems of interrelated devices that have the ability to transfer data over a network with no human intervention ie - IoT.
                            I am also very interested in learning and applying how The Cloud can pave the way for this data to travel.
                        </p>

                        <p id="pone">
                            Here, I work with in a cloud computing unit with cutting edge technology on exciting projects.
                            Our aim is to build automated pipelines for a seamless integration with the cloud for our Devs.
                            In doing so, we enable the Devs to focus above the value line (What we Deliver to our Customers) and 
                            focus on the most complex aspects of the application.
                        </p>

                        <p id="pone">
                        Tools that I am currently learning and harnessing to implement solutions include Kubernetes, Docker, Golang, Skaffold to name a few 😄. I strive for best practice in my field and I am look forward to exploring how best practices in the DevOps space can be harnessed to implement revolutionary technolocial solutions.
                        </p>
                        
                       
                </div>

    
           </div>
        );
    }
}

export default About;
