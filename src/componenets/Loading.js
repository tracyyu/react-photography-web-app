import React from 'react';

const LoadingPage = () => (
    <div className="loader">
        <div className="camera">
            <div className="camera-animation">
                <div className="face">
                
                </div>
            </div>
        </div>
        <img className="loader__image" src="/images/loader.gif"/>
    </div>
);

export default LoadingPage;