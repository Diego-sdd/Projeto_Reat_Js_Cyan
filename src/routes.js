import React from 'react';

import { BrowserRouter, HashRouter, Switch, Route } from "react-router-dom";

import Service from './components/description/index';

import Header from './components/header/index';
import Body from './components/body/index';
import Footer from './components/footer/index';
import Contact from './components/contact/index';
const Routes = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/">
                <Header />
                <Body />
                <Footer />
            </Route>
            <Route path="/service">
                <Header />
                <Service />
                <Footer />
            </Route>
            <Route path="/contact">
                <Header />
                <Contact />
                <Footer />
            </Route>
        </Switch>
    </HashRouter>
);

export default Routes;

