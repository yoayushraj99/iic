import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoadingScreen from "./SvgComponent";

import Homepage from "./Home/HomePage";
import Connect from "./Connect-us/Connect";
import Partners from "./Partners-Page/Partners";
import Portfolio from "./Portfolio/Portfolio";
import Gallery from "./Gallery/gallery";
import Programmes from "./Programmes-Page/Programmes";
import Guideline from "./About/Guideline";
import Faq from "./About/Faq";
import Error from "./Error";
import Tinkering from "./tinkering/Tinkering";
import AsokeSen from "./AsokeSen/AsokeSen";
import Team from "./Team/Team";
import Feedback from "./Feedback/Feedback";
import ButtonsOnRight from "./ButtonsOnRight/Bar";
import EventsPreview from "./Events-preview/events-preview.component";
import Login from './Login/Login';
import Admin from './ADMIN/Admin'
import Event from './Event/Event'
import Events01 from "./Event/Event01";
import Events02 from "./Event/Event02";
import Events03 from "./Event/Event03";
import Events04 from "./Event/Event04";
import Events05 from "./Event/Event05";
import Events06 from "./Event/Event06";
import Events07 from "./Event/Event07";
import Events08 from "./Event/Event08";
import Events09 from "./Event/Event09";
import Events10 from "./Event/Event10";
import Events11 from "./Event/Event11";
import Events12 from "./Event/Event12";
import Events13 from "./Event/Event13";
import Events14 from "./Event/Event14";
import Events15 from "./Event/Event15";
import Events16 from "./Event/Event16";
import Events17 from "./Event/Event17";
import Events18 from "./Event/Event18";
import Events19 from "./Event/Event19";
import Events20 from "./Event/Event20";
import Events21 from "./Event/Event21";
import Events22 from "./Event/Event22";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 0); // Default 2000 set to 0 during development
  }, []);

  return (
    <>
      {loading === false ? (
        <BrowserRouter>
          <div>
            <ButtonsOnRight />
            <Switch>
              <Route path="/" component={Homepage} exact />
              <Route path="/Connect" component={Connect} />
              <Route path="/Partners" component={Partners} />
              <Route path="/Portfolio" component={Portfolio} />
              <Route path="/Programmes" component={Programmes} />
              <Route path="/gallery" component={Gallery} />
              <Route path="/Events" component={EventsPreview} />
              <Route path="/Tinkering" component={Tinkering} />
              <Route path="/AsokeSen" component={AsokeSen} />
              <Route path="/Team" component={Team} />
              <Route path="/Guideline" component={Guideline} />
              <Route path="/Faq" component={Faq} />
              <Route path="/Feedback" component={Feedback} />
              <Route path="/Login" component={Login} />
              <Route path="/admin" component={Admin} />
              <Route path="/Event:id" component={Event} />
              <Route path="/Event01" component={Events01} />
              <Route path="/Event02" component={Events02} />
              <Route path="/Event03" component={Events03} />
              <Route path="/Event04" component={Events04} />
              <Route path="/Event05" component={Events05} />
              <Route path="/Event06" component={Events06} />
              <Route path="/Event07" component={Events07} />
              <Route path="/Event08" component={Events08} />
              <Route path="/Event09" component={Events09} />
              <Route path="/Event10" component={Events10} />
              <Route path="/Event11" component={Events11} />
              <Route path="/Event12" component={Events12} />
              <Route path="/Event13" component={Events13} />
              <Route path="/Event14" component={Events14} />
              <Route path="/Event15" component={Events15} />
              <Route path="/Event16" component={Events16} />
              <Route path="/Event17" component={Events17} />
              <Route path="/Event18" component={Events18} />
              <Route path="/Event19" component={Events19} />
              <Route path="/Event20" component={Events20} />
              <Route path="/Event21" component={Events21} />
              <Route path="/Event22" component={Events22} />
              <Route component={Error} />
            </Switch>
          </div>
        </BrowserRouter>
      ) : (
        <div id="svgcenter">
          <LoadingScreen />
        </div>
      )}
    </>
  );
}

export default App;
