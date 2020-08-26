import React from "react";
import Markdown from "react-markdown";
import './node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../index.css';
var src = "../../content/sample.md";

import { Button, Nav, Image } from 'react-bootstrap';

export default function Intro() {
    return (
      <>
      <div id="bodydiv">
      <Markdown source={src} />
      </div>
      </>
    );
  }