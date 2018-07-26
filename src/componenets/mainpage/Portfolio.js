import React from 'react';

import autumnImg from '../../assets/images/portfolio/after/autumn.jpeg';
import fall from '../../assets/images/portfolio/after/fall.jpeg';
import phillyImg from '../../assets/images/portfolio/after/philly.jpeg';
import Australia from '../../assets/images/portfolio/after/australia.JPG';
import bigsur from '../../assets/images/portfolio/after/bigsur.jpg';
import bixby from '../../assets/images/portfolio/after/bixby.jpg';
import dockweiler from '../../assets/images/portfolio/after/dockweiler.JPG';
import dtla from '../../assets/images/portfolio/after/dtla.JPG';
import echopark from '../../assets/images/portfolio/after/echopark.JPG';
import hollywood from '../../assets/images/portfolio/after/hollywood.JPG';
import horseshoebend from '../../assets/images/portfolio/after/horseshoebend.jpeg';
import losAngeles from '../../assets/images/portfolio/after/losAngeles.jpg';
import newyork from '../../assets/images/portfolio/after/newyork.JPG';
import night from '../../assets/images/portfolio/after/night.jpg';
import playavista from '../../assets/images/portfolio/after/playavista.jpg';
import ucla from '../../assets/images/portfolio/after/ucla.jpg';
import Yosemite from '../../assets/images/portfolio/after/Yosemite.jpg';
import santamonica from '../../assets/images/portfolio/after/santamonica.jpg';
import yosemiteriver from '../../assets/images/portfolio/after/yosemite-river.jpg';

const Portfolio = props => (
    <div className="portfolio-container cols">
        <div className="box one"><img src={autumnImg} /></div>
        <div className="box two"><img src={fall} /></div>
        <div className="box three"><img src={phillyImg} /></div>
        <div className="box one"><img src={Australia} /></div>
        <div className="box three"><img src={dtla} /></div>
        <div className="box five"><img src={newyork} /></div>
        <div className="box two"><img src={ucla} /></div>
        <div className="box one"><img src={bixby} /></div>
        <div className="box two"><img src={night} /></div>
        <div className="box five"><img src={echopark} /></div>
        <div className="box four"><img src={dockweiler} /></div>
        <div className="box five"><img src={horseshoebend} /></div>
        <div className="box two"><img src={Yosemite} /></div>
        <div className="box three"><img src={hollywood} /></div>
        <div className="box one"><img src={losAngeles} /></div>
        <div className="box four"><img src={playavista} /></div>
        <div className="box four"><img src={bigsur} /></div>
        <div className="box five"><img src={santamonica} /></div>
        <div className="box two"><img src={yosemiteriver} /></div>
    </div>
);

export default Portfolio;