import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../index.css";
import { Container, Navbar, Dropdown, DropdownButton, Breadcrumb, BreadcrumbItem} from "react-bootstrap";
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
            <Dropdown.Item eventKey="1">
              <Link to="/" id="linktext">
                home
              </Link>
            </Dropdown.Item>
            <Dropdown.Item eventKey="2">
              <Link to="/about" id="linktext">
                about
              </Link>
            </Dropdown.Item>
            <Dropdown.Item eventKey="3">
              <Link to="/resume" id="linktext">
                resume
              </Link>
            </Dropdown.Item>
            <Dropdown.Item eventKey="4">
              <Link to="/projects" id="linktext">
                projects
              </Link>
            </Dropdown.Item>
            <Dropdown.Item eventKey="4">
              <Link to="/john" id="linktext">
                john
              </Link>
            </Dropdown.Item>
          </DropdownButton>
        </Navbar>
      </div>
    </>
  );
}
