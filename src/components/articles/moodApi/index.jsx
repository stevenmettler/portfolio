import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../index.css";

import codeImage from "../../../assets/code.png";

import { Button, Nav, Image } from "react-bootstrap";

export default function MoodAPI() {
  return (
    <>
      <div>
        <Image fluid="true" src={codeImage} />
        <br />
        <br />
        <h1> Mood API </h1>
        <p>
          In the Mood API, you can submit a mood that you are feeling.
          <br />
          It's a great thing to be able to tell someone what we are feeling, but
          a computer won't judge us!
          <br />
          When you submit a mood, it will be stored in a SQLite db. If you
          submit a mood on consecutive days, you will get a streak! Try to get
          the longest streak you can and compare it with other users.
          <br />
          <br />
          <h5>Technologies used:</h5>
          <ul>
            <li>Python</li>
            <li>Flask</li>
            <li>SQLite</li>
            <li>Git</li>
            <li>Docker</li>
          </ul>
        </p>
      </div>
    </>
  );
}
