import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css';
import { Button, Nav } from 'react-bootstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../home';
import Resume from '../resume';
import About from '../about';
import John from '../john';
import Projects from '../projects';
import Articles from '../articles';

export default function Body() {
    return (
      <>
      <div>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/projects" component={Projects} />
                <Route path="/about" component={About} />
                <Route path="/resume" component={Resume} />
                <Route path="/john" component={John} />
                <Route path="/links" component={`../links`} />
                <Route path="/articles" component={Articles} />
                <Route component={Error} />
            </Switch>
      </div>
      </>
    );
  }