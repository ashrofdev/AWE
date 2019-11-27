import React from 'react';
import Slide from 'react-reveal/Slide'
import Zoom from 'react-reveal/Zoom'
import './about.css'

const About = () => {
    return (
        <div className="section about">
            <div className="section_content">
                <h2 className="heading">About me</h2>
                <div className="seb_content">
                    <Slide bottom duration={500}>
                        <div className="text">
                            <h3>My Name</h3>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                            occaecat cupidatat non proident.
                            </p>
                        </div>
                    </Slide>
                    <Zoom delay={500}>
                        <figure>
                            <img src={require('../img/1.jpeg')}/>
                        </figure>
                    </Zoom>
                </div>
            </div>
            
        </div>
    );
};

export default About;