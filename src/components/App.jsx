import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Homepage from './Home/HomePage';
import Connect from './Connect-us/Connect';
import Partners from './Partners-Page/Partners';
import Portfolio from './Portfolio/Portfolio';
import Programmes from './Programmes-Page/Programmes';
import Guideline from "./About/Guideline";
import Faq from "./About/Faq";
import Error from './Error';
import Tinkering from './tinkering/Tinkering'
import AsokeSen from './AsokeSen/AsokeSen';
import Team from './Team/Team';
import Events from './Event/Events';
import Events01 from './Event/Event01';
import Events02 from './Event/Event02';

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
             <Route path="/Events" component={Events}/>
             <Route path="/Tinkering" component={Tinkering}/>
             <Route path="/AsokeSen" component={AsokeSen}/>
             <Route path="/Team" component={Team}/>
             <Route path="/Guideline" component={Guideline}/>
             <Route path="/Faq" component={Faq}/>
             <Route path="/Event01" component={Events01}/>
             <Route path="/Event02" component={Events02}/>

            <Route component={Error}/>
           </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
