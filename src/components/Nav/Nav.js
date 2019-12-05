import React from 'react';
import { scroller } from 'react-scroll'
import './nav.css'

const Nav = ({authenticate}) => {
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
                <li onClick={authenticate}>Jobs</li>
                <li onClick={()=>goTo('portfolio')}>Portfolio</li>
                <li onClick={()=>goTo('contact')}>Hire me</li>
            </ul> 
        </nav>
    );
};

export default Nav;