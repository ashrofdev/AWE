import React from 'react';
import Zoom from 'react-reveal/Zoom'
import './features.css'

const Features = () => {
    return (
        <div className="section features">
            <div className="section_content">
                <h2 className="heading">what i offer</h2>
                <div className="items">
                    <Zoom>
                    <div className="feature">
                    <figure>📸</figure>
                        <h3>Photoshop</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing eli
                            t, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                        </p>
                    </div>
                    </Zoom>
                    <Zoom delay={300}>
                    <div className="feature">
                        <figure>🎨</figure>
                        <h3>Grephics Design</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing eli
                            t, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                        </p>
                    </div>
                    </Zoom>
                </div>
            </div>
        </div>
    );
};

export default Features;