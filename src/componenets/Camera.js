import React from 'react';
import '../styles/components/_camera.scss';

const Camera = props => (
    <div id="animation-travel">   
        <div className="face">
        <div className="notch"></div>
        <div className="notch-top"></div>
        <div className="notch-tag">SONY</div>
        <div className="lens-liner"></div>
        <div className="lens-holder">
            <div className="lens-holder-inner">
            <div className="inner-mirror"></div>
            </div>
        </div>
        <div className="handler"></div>
        <div className="tag-alpha">&alpha;</div>
        <div className="tag-model">
            7<span style={{ color: "red"}}>R</span>       
        </div>
        <div className="front-btn-handle"></div>
        <div className="front-btn left"></div>
        <div className="dial">|||||||||||</div>
        <div className="button"></div>
        <div className="button-top"></div>
        <div className="button-left"></div>
        </div>
        <div className="lenses">
        <div className="lens"></div>
        <div className="lens2"></div>
        <div className="inner-lens"></div>
        <div className="red-lens">
            <div className="red-glimmer"></div>
        </div>
        <div className="inner-lens2"></div>
        <div className="inner-lens3"></div>
        </div>
    </div>
);

export default Camera;