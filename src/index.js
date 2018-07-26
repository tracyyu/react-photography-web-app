import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './styles/styles.scss';
import App from './App';
import Homepage from './componenets/Homepage';
import AboutPage from './componenets/mainpage/AboutPage';
import ContactPage from './componenets/mainpage/ContactPage';
import MainPage from './componenets/mainpage/MainPage';
import registerServiceWorker from './registerServiceWorker';

const NotFoundPage = () => (
    <div>
        404! - <Link to="/">Go to homepage</Link>
    </div>
);

const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Homepage} exact={true}/>
            <Route path="/main" component={MainPage} />
            <Route path="/main/about" component={AboutPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();
