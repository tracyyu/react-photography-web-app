import React from 'react';
import BeforeBigSur from '../../assets/images/portfolio/before/before-bigsur.jpg';
import BigSur from '../../assets/images/portfolio/after/bigsur.jpg';
import BeforeBixby from '../../assets/images/portfolio/before/before-bixby.jpg';
import Bixby from '../../assets/images/portfolio/after/bixby.jpg';
import BeforeDTLA from '../../assets/images/portfolio/before/before-dtla.png';
import DTLA from '../../assets/images/portfolio/after/dtla.JPG';
import BeforeDockweiler from '../../assets/images/portfolio/before/before-dockweiler.jpg';
import Dockweiler from '../../assets/images/portfolio/after/dockweiler.JPG';
import BeforeYosemiteRiver from '../../assets/images/portfolio/before/before-yosemite-river.jpg';
import YosemiteRiver from '../../assets/images/portfolio/after/yosemite-river.jpg';
import BeforeYosemite from '../../assets/images/portfolio/before/before-yosemite.jpg';
import Yosemite from '../../assets/images/portfolio/after/yosemite2.jpg';
import BeforeEchoPark from '../../assets/images/portfolio/before/before-echo-park.jpg';
import EchoPark from '../../assets/images/portfolio/after/echopark.JPG';
import BeforeHollywoodHills from '../../assets/images/portfolio/before/before-hollywood-hills.jpg';
import HollywoodHills from '../../assets/images/portfolio/after/hollywood.JPG';




const Portfolio = props => (
    <div className="beforeAfter-container">
        <div className="cols">
            <div className="box">
                <div className="before"><img src={BeforeBigSur} /></div>
                <div className="after"><img src={BigSur} /></div>
            </div>
            <div className="box">
                <div className="before"><img src={BeforeBixby} /></div>
                <div className="after"><img src={Bixby} /></div>
            </div>
            <div className="box">
                <div className="before"><img src={BeforeDTLA} /></div>
                <div className="after"><img src={DTLA} /></div>
            </div>
            <div className="box">
                <div className="before"><img src={BeforeDockweiler} /></div>
                <div className="after"><img src={Dockweiler} /></div>
            </div>
            <div className="box">
                <div className="before"><img src={BeforeYosemiteRiver} /></div>
                <div className="after"><img src={YosemiteRiver} /></div>
            </div>
            <div className="box">
                <div className="before"><img src={BeforeYosemite} /></div>
                <div className="after"><img src={Yosemite} /></div>
            </div>
            <div className="box">
                <div className="before"><img src={BeforeEchoPark} /></div>
                <div className="after"><img src={EchoPark} /></div>
            </div>
            <div className="box">
                <div className="before"><img src={BeforeHollywoodHills} /></div>
                <div className="after"><img src={HollywoodHills} /></div>
            </div>
        </div>
    </div>
);

export default Portfolio;