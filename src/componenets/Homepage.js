import React from 'react';
import {Route, NavLink} from 'react-router-dom';

import Camera from './Camera';
import homepageImage from '../assets/images/portfolio/after/horseshoebend.jpeg';
import Footer from './Footer';

const Homepage = props => (
    <div className="Hompage">
        <Camera />
        <div className="background" style={{backgroundImage: `url(${homepageImage})` }}></div>
        <div className="Homepage-intro">
            <div class="vertical-center">
                <div class="homepage-row justify-content-center">
                    <h1 className="title-homepage">JASON H. TANG</h1>
                    <p className="description-homepage">Landscape photographer based in Los Angeles, CA. Now in Winston-Salem, NC.</p>
                    <div className="homepage-row justify-content-center">
                        <div className="col">
                            <button className="btn-homepage">
                                <NavLink className="link" to="/main/portfolio">PORTFOLIO</NavLink>
                            </button>
                        </div>
                        <div className="col">
                            <button className="btn-homepage"><a href="https://www.instagram.com/jhtang_/" target="_blank" className="link">INSTAGRAM</a></button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    </div>
);

export default Homepage;