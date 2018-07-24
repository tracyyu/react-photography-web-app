import React from 'react';
import Aux from './HOC/Aux';
import homepageImage from '../assets/images/homepage.jpeg';

const Homepage = props => (
    <Aux>
        <div className="background" style={{backgroundImage: `url(${homepageImage})` }}>
        </div>
        <div className="container">
            <div className="row">
                <h1 className="title-homepage">{props.title}</h1>
                <p className="description-homepage">{props.description}</p>
                <div className="row">
                    <div className="col">
                        <button type="button" className="btn btn-homepage">PORTFOLIO</button>
                    </div>
                    <div className="col">
                        <button type="button" className="btn btn-homepage">INSTAGRAM</button>
                    </div>
                </div>
            </div>
            <div className="footer">
                <nav>
                    <a href=""><i className="fab fa-instagram fa-lg"></i></a>
                    <a href=""><i className="fab fa-facebook-f fa-lg"></i></a>
                    <a href=""><i className="fab fa-twitter fa-lg"></i></a>
                    <a href=""><i className="far fa-envelope fa-lg"></i></a>
                </nav>
            </div>
        </div>
    </Aux>
);

export default Homepage;