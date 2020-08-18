import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../index.css";

import { Button, Nav, Card, CardColumns } from "react-bootstrap";
import image from "../../assets/original.jpg";

export default function Projects() {
  return (
    <>
      <div id="bodydiv">
        <CardColumns>
          <Card>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title>Mood API</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title>Mood API</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title>Mood API</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title>Mood API</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title>Mood API</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title>Mood API</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardColumns>
      </div>
    </>
  );
}
