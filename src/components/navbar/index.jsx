import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../index.css";
import {
  Container,
  Navbar,
  Dropdown,
  DropdownButton,
  Breadcrumb,
  BreadcrumbItem,
} from "react-bootstrap";
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
            <Dropdown.Item href="/" eventKey="1">
              <Link to="/">home</Link>
            </Dropdown.Item>
            <Dropdown.Item href="/about" eventKey="2">
              <Link to="/about">about</Link>
            </Dropdown.Item>
            <Dropdown.Item href="/resume" eventKey="3">
              <Link to="/resume">resume</Link>
            </Dropdown.Item>
            <Dropdown.Item href="/projects" eventKey="4">
              <Link to="/projects">projects</Link>
            </Dropdown.Item>
            <Dropdown.Item href="john" eventKey="4">
              <Link to="/john">john</Link>
            </Dropdown.Item>
          </DropdownButton>
        </Navbar>
      </div>
    </>
  );
}
