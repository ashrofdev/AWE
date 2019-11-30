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
                            <img src={require('../img/1.jpg')}/>
                        </figure>
                    </Slide>
                    <Slide left duration={1000} delay={400}>
                        <figure className="work">
                            <img src={require('../img/2.jpg')}/>
                        </figure>
                    </Slide>

                    <Slide right delay={600}>
                        <figure className="work">
                            <img src={require('../img/3.jpg')}/>
                        </figure>
                    </Slide>
                    <Slide top delay={100}>
                        <figure className="work">
                            <img src={require('../img/4.jpg')}/>
                        </figure>
                    </Slide>
                    <Slide right duration={1000} delay={400}>
                        <figure className="work">
                            <img src={require('../img/5.jpg')}/>
                        </figure>
                    </Slide>
                    <Slide bottom delay={600}>
                        <figure className="work">
                            <img src={require('../img/6.jpg')}/>
                        </figure>
                    </Slide>
                    <Slide right duration={1000} delay={200}>
                        <figure className="work">
                            <img src={require('../img/7.jpg')}/>
                        </figure>
                    </Slide>
                    <Slide top delay={400}>
                        <figure className="work">
                            <img src={require('../img/8.jpg')}/>
                        </figure>
                    </Slide>
                    <Slide bottom duration={1000} delay={600}>
                        <figure className="work">
                            <img src={require('../img/3.jpg')}/>
                        </figure>
                    </Slide>
                    {/* <Slide top delay={200}>
                        <figure className="work">
                            <img src={require('../img/1.jpg')}/>
                        </figure>
                    </Slide>
                    <Slide bottom duration={1000} delay={600}>
                        <figure className="work">
                            <img src={require('../img/3.jpg')}/>
                        </figure>
                    </Slide>
                    <Slide top delay={200}>
                        <figure className="work">
                            <img src={require('../img/1.jpg')}/>
                        </figure>
                    </Slide> */}
                    
                   
                </div>
            </div>
            <div className="hire_me">
                <h2><span>hire me</span> for your project</h2>
                <button>contact me</button>
            </div>
        </div>
    );
};

export default Portfolio;