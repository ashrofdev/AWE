import React from 'react';
import Slide from 'react-reveal/Slide'
import {scroller} from 'react-scroll'
import './portfolio.css'

const Portfolio = ({projects}) => {
    console.log(projects)

    const project = projects.map(i=>{
        return (
            <Slide bottom delay={100}>
                <figure className="work">
                    <img className="pro_img" src={i.url}/>
                </figure>
            </Slide>
        )
    })

    const toContact = () => {
        scroller.scrollTo('contact', {
            duration: 1000,
            delay: 0,
            smooth: true
        })
    }
    return (
        <div className="section portfolio">
            <div className="section_content">
                <h2 className="heading">My Recent works</h2>

                <div className="works">
                    {project}
                   
                    <Slide bottom duration={1000} delay={600}>
                        <figure className="work">
                            <img src={require('../img/3.jpg')}/>
                        </figure>
                    </Slide>
                   
                    
                   
                </div>
            </div>
            <div className="hire_me">
                <h2><span>hire me</span> for your project</h2>
                <button onClick={toContact}>contact me</button>
            </div>
        </div>
    );
};

export default Portfolio;