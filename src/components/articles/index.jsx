import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../index.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MoodAPI from "./moodApi";

export default function Articles() {
  return (
    <>
      <div id="bodydiv">
        <Switch>
          <Route path="/articles/moodapi" component={MoodAPI} />
          <Route component={Error} />
        </Switch>
      </div>
    </>
  );
}
