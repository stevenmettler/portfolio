import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css';
import { Button, Nav } from 'react-bootstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../home';
import Articles from '../articles';
import Resume from '../resume';

export default function Body() {
    return (
      <>
      <div id='bodydiv'>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/articles" component={Articles} />
                <Route path="/portfolio" component={`../portfolio`} />
                <Route path="/resume" component={Resume} />
                <Route path="/links" component={`../links`} />
                <Route component={Error} />
            </Switch>
      </div>
      </>
    );
  }