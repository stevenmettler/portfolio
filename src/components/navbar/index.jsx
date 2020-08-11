import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../index.css";
import { Container, Navbar, Dropdown, DropdownButton } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function NavBar() {
  return (
    <>
      <div>
        <Navbar fixed="top">
          <DropdownButton
            key="right"
            id="hellobutton"
            drop="right"
            title={` steven mettler `}
          >
            <Dropdown.Item eventKey="1"><Link to="/" id='linktext'>home</Link></Dropdown.Item>
            <Dropdown.Item eventKey="2"><Link to="/resume" id='linktext'>resume</Link></Dropdown.Item>
            <Dropdown.Item eventKey="3"><Link to="/articles" id='linktext'>articles</Link></Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">links</Dropdown.Item>
          </DropdownButton>
        </Navbar>
      </div>
    </>
  );
}
