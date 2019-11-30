import React from 'react';
import Slider from 'react-slick'
import './head.css'

const Header = () => {
    const settings = {
        dots: false,
        infinite:true,
        autoplay: true,
        speed: 700
    }
    return (
        <div className="slider">
            <img className="logo" src={require('../img/c.jpg')}/>
            <h1>AWE CHARISTIM</h1>
            <Slider {...settings}>
                <div className="slide">
                   <img src={require('../img/3.jpg')}/>
                </div>
                <div className="slide">
                   <img src={require('../img/4.jpg')}/>
                </div>
                <div className="slide">
                   <img src={require('../img/5.jpg')}/>
                </div>
            </Slider>
        </div>
    );
};

export default Header;