import React from 'react';

import AutumnImg from '../../assets/images/portfolio/autumn.jpeg';
import FallImg from '../../assets/images/portfolio/fall.jpeg';
import PhillyImg from '../../assets/images/portfolio/philly.jpeg';

const Portfolio = props => (
    <div className="container cols">
        <div className="box one"><img src={AutumnImg} /></div>
        <div className="box two"><img src={FallImg} /></div>
        <div className="box three"><img src={PhillyImg} /></div>
    </div>
);

export default Portfolio;