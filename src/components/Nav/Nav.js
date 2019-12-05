import React from 'react';
import { scroller } from 'react-scroll'
import './nav.css'

const Nav = () => {
    const goTo = (dest) => {
        scroller.scrollTo(dest, {
            duration: 1000,
            delay: 0,
            smooth: true
        })
    }
    return (
        <nav>
            <ul>
                <li onClick={()=>goTo('about')}>About</li>
                <li onClick={()=>goTo('jobs')}>Jobs</li>
                <li onClick={()=>goTo('portfolio')}>Portfolio</li>
                <li onClick={()=>goTo('contact')}>Hire me</li>
            </ul> 
        </nav>
    );
};

export default Nav;