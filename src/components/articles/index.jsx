import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css';
import Markdown from "react-markdown";
var src = '../../content/sample.md';

import { Button, Nav } from 'react-bootstrap';

export default function Articles() {
    return (
      <>
      <div id='bodydiv'>
      <Markdown source={src} />
      </div>
      </>
    );
  }