import React from 'react';
import Slide from 'react-reveal/Slide'
import './portfolio.css'

const Portfolio = () => {
    return (
        <div className="section portfolio">
            <div className="section_content">
                <h2 className="heading">My Recent works</h2>

                <div className="works">
                    <Slide bottom delay={100}>
                        <figure className="work">
                            <img src={require('../img/1.jpeg')}/>
                        </figure>
                    </Slide>
                    <Slide left duration={1000} delay={400}>
                        <figure className="work">
                            <img src={require('../img/2.jpeg')}/>
                        </figure>
                    </Slide>

                    <Slide right delay={600}>
                        <figure className="work">
                            <img src={require('../img/3.jpeg')}/>
                        </figure>
                    </Slide>
                    <Slide top delay={100}>
                        <figure className="work">
                            <img src={require('../img/1.jpeg')}/>
                        </figure>
                    </Slide>
                    <Slide right duration={1000} delay={400}>
                        <figure className="work">
                            <img src={require('../img/3.jpeg')}/>
                        </figure>
                    </Slide>
                    <Slide bottom delay={600}>
                        <figure className="work">
                            <img src={require('../img/1.jpeg')}/>
                        </figure>
                    </Slide>
                    <Slide right duration={1000} delay={200}>
                        <figure className="work">
                            <img src={require('../img/2.jpeg')}/>
                        </figure>
                    </Slide>
                    <Slide top delay={400}>
                        <figure className="work">
                            <img src={require('../img/1.jpeg')}/>
                        </figure>
                    </Slide>
                    <Slide bottom duration={1000} delay={600}>
                        <figure className="work">
                            <img src={require('../img/3.jpeg')}/>
                        </figure>
                    </Slide>
                    <Slide top delay={200}>
                        <figure className="work">
                            <img src={require('../img/1.jpeg')}/>
                        </figure>
                    </Slide>
                    
                   
                </div>
            </div>
        </div>
    );
};

export default Portfolio;