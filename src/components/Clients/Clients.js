import React from 'react';
import Slider from 'react-slick'
import './clients.css'

const Clients = () => {
    const settings = {
        dots: false,
        infinite: true,
        duration: 500,
        autoplay: true
    }
    return (
        <div className="section clients">
            <div className="section_content">
                <h2 className="heading">Clients feedback</h2>
                <Slider { ...settings }>
                    <div className="client">
                        <figure>
                            <img src={require('../img/1.jpg')}/>
                        </figure>
                        <h3>John Doe</h3>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        magnam itaque dicta, quod sunt expedita modi quibusdam iusto..
                        </p>
                    </div>
                    <div className="client">
                        <figure>
                            <img src={require('../img/3.jpg')}/>
                        </figure>
                        <h3>Andrew Mead</h3>
                        <p>
                        Quaerat perspiciatis magnam itaque dicta, quod sunt 
                        expedita modi quibusdam iusto.
                        </p>
                    </div>
                    <div className="client">
                        <figure>
                            <img src={require('../img/2.jpg')}/>
                        </figure>
                        <h3>Jonas Schmedtman</h3>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat perspiciatis 
                        magnam itaque dicta.
                        </p>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Clients;