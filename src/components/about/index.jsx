import React from "react";
import ReactMarkdown from "react-markdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../index.css";

import { Button, Nav, Image } from "react-bootstrap";

const markdown ='# This is a header\n\nAnd this is a paragraph';

export default function About() {
  return (
    <>
      <div id="bodydiv">
        <ReactMarkdown source={markdown} />
      </div>
    </>
  );
}
