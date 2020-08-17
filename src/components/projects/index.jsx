import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css';

import { Button, Nav, Card } from 'react-bootstrap';
import image from '../../assets/original.jpg';

export default function Projects() {
    return (
      <>
      <div>
        <Card>
          <Card.Img style={{ height: '300px'}} variant="top" src={image} />
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk
              of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        hello
      </div>
      </>
    );
  }