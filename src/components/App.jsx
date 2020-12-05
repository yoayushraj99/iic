import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Homepage from '../components/Home/HomePage';
import Connect from '../components/Connect-us/Connect';
import Partners from '../components/Partners-Page/Partners';
import Portfolio from '../components/Portfolio/Portfolio';
import Programmes from '../components/Programmes-Page/Programmes';
import Testimonial from '../components/Testimonial-Page/Testimonial';
import Guideline from "../components/About/Guideline";
import Faq from "../components/About/Faq";
import Error from './Error';

function App() {
  return (
    <BrowserRouter>
        <div>
            <Switch>
             <Route path="/" component={Homepage} exact/>
             <Route path="/Connect" component={Connect}/>
             <Route path="/Partners" component={Partners}/>
             <Route path="/Portfolio" component={Portfolio}/>
             <Route path="/Programmes" component={Programmes}/>
             <Route path="/Testimonial" component={Testimonial}/>
             <Route path="/Guideline" component={Guideline}/>
             <Route path="/Faq" component={Faq}/>
            <Route component={Error}/>
           </Switch>
        </div> 
    </BrowserRouter>
  );
}

export default App;
