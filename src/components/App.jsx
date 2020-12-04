import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Homepage from '../components/Home/HomePage';
import AboutUs from '../components/About-Page/AboutUs';
import Connect from '../components/Connect-us/Connect';
import Partners from '../components/Partners-Page/Partners';
import Portfolio from '../components/Portfolio/Portfolio';
import Programmes from '../components/Programmes-Page/Programmes';
import Testimonial from '../components/Testimonial-Page/Testimonial';
import Error from './Error';
import Tinkering from './tinkering/Tinkering'

function App() {
  return (
    <BrowserRouter>
        <div>
            <Switch>
             <Route path="/" component={Homepage} exact/>
             <Route path="/About" component={AboutUs}/>
             <Route path="/Connect" component={Connect}/>
             <Route path="/Partners" component={Partners}/>
             <Route path="/Portfolio" component={Portfolio}/>
             <Route path="/Programmes" component={Programmes}/>
             <Route path="/Testimonial" component={Testimonial}/>
             <Route path="/Tinkering" component={Tinkering}/>
             
            <Route component={Error}/>
           </Switch>
        </div> 
    </BrowserRouter>
  );
}

export default App;
