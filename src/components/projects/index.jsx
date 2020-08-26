import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../index.css";

import { Button, Nav, Card, CardColumns } from "react-bootstrap";
import image from "../../assets/original.jpg";
import codeImage from "../../assets/code.png";

export default function Projects() {
  return (
    <>
      <div id="bodydiv">
        <Card>
          <Card.Img variant="top" src={codeImage} />
          <Card.Body>
            <Card.Title>Mood API</Card.Title>
            <Card.Text>
              API that tracks user's mood. Compare your moods with others! Check
              all of your submitted moods! Python, Flask
            </Card.Text>
            <a href="#">Read more...</a>
          </Card.Body>
        </Card>
        <br />
        <CardColumns>
          
        </CardColumns>
      </div>
    </>
  );
}
