import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Homepage from './Pages/Homepage';
import About from './Pages/About';
import Connect from './Pages/Connect';
import Partners from './Pages/Partners';
import Portfolio from './Pages/Portfolio';
import Programmes from './Pages/Programmes';
import Testimonial from './Pages/Testimonial';
import Error from './components/Error';

function App() {
  return (
    <BrowserRouter>
        <div>
            <Switch>
             <Route path="/" component={Homepage} exact/>
             <Route path="/About" component={About}/>
             <Route path="/Connect" component={Connect}/>
             <Route path="/Partners" component={Partners}/>
             <Route path="/Portfolio" component={Portfolio}/>
             <Route path="/Programmes" component={Programmes}/>
             <Route path="/Testimonial" component={Testimonial}/>
             
            <Route component={Error}/>
           </Switch>
        </div> 
    </BrowserRouter>
  );
}

export default App;
