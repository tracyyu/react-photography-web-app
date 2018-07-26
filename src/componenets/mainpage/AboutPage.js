import React from 'react';
import portraitImg from '../../assets/images/portrait.jpg';
import MapContainer from '../UI/MapContainer';

const AboutPage = props => (
    <div className="About">
        <div className="row">
            <div className="image col-md-6 text-center">
                <img src={portraitImg} className="portrait" />
            </div>
            <div className="description col-md-6 text-center">
                <h1>Who am I?</h1>
                <p>
                    Lorem ipsum dolor sit amet, ei sanctus minimum vituperatoribus eum. 
                    Eum vidit nulla philosophia id. Veniam vulputate adversarium usu at, 
                    enim affert probatus vis ei. 
                    An pri impetus dissentiet, dico scripta eos ad, meis sensibus id mei.
                    Accumsan ocurreret vis ea, at posse movet latine sed.
                </p>
                <br />
                <h1>Where I've been?</h1>
                <MapContainer />
            </div>
        </div>
    </div>
);

export default AboutPage;