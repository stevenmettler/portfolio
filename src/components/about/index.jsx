import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css';

import { Button, Nav, Image } from 'react-bootstrap';

export default function About() {
    return (
      <>
      <div>
      <h5>
      "What Tarquin the Proud said in his garden with the poppy blooms was understood by the son but not by the messenger."
      </h5>
      <Image src='original.jpg' fluid />
      </div>
      </>
    );
  }