import React, { Component } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Homepage from '../Homepage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import PortfolioPage from './Portfolio';
import Footer from '../Footer';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class MainPage extends Component {
    render() {
      return (
        <div className="Main">
          <Header></Header>
          <Navigation />
          <Switch>
              <Route path="/main/portfolio" component={PortfolioPage} />
              <Route path="/main/about" component={AboutPage} />
              <Route path="/main/contact" component={ContactPage} />
          </Switch>
          {/*
          <PortfolioPage />
          <Landscape />
          <Cityscape />
          <BeforeAfterPage />
          */}
          <Footer />
        </div>
      );
    }
  }
  
  export default MainPage;