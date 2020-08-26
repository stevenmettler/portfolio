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
        <h1> Mood API </h1> 
        <p>
          Hello, this is some text about my article.

          I worked very hard on this project. I worked very hard on this project. I worked very hard on this project. I worked very hard on this project. I worked very hard on this project.
        <br />
        I worked very hard on this project. I worked very hard on this project. I worked very hard on this project. I worked very hard on this project. I worked very hard on this project.
        </p>
      </div>
    </>
  );
}
