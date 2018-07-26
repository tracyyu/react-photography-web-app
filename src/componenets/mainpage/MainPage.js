import React, { Component } from 'react';
import Aux from '../HOC/Aux';
import Header from './Header';
import Navigation from './Navigation';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import PortfolioPage from './Portfolio';
import BeforeAfterPage from './BeforeAfterPage';
import Footer from '../Footer';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class MainPage extends Component {
    render() {
      return (
        <Aux>
          <div className="Main">
            <Header></Header>
            <Navigation />
            <Switch>
                <Route path="/main/portfolio" component={PortfolioPage} />
                <Route path="/main/beforeafter" component={BeforeAfterPage} />
                <Route path="/main/about" component={AboutPage} />
                <Route path="/main/contact" component={ContactPage} />
            </Switch>
            {/*
            <PortfolioPage />
            <Landscape />
            <Cityscape />
            <BeforeAfterPage />
            */}
          </div>
          <Footer />
        </Aux>
      );
    }
  }
  
  export default MainPage;