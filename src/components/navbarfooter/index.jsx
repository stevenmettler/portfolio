import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../index.css";
import GithubImg from "../../assets/icons8-github-50.png";
import LinkedinImg from "../../assets/icons8-linkedin-50.png";
import {
  Container,
  Navbar,
  Dropdown,
  DropdownButton,
  Breadcrumb,
  BreadcrumbItem,
  NavbarBrand,
} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBarFooter() {
  return (
    <>
      <div>
        <Navbar fixed="bottom">
          <NavbarBrand>
            <a href="https://www.github.com/stevenmettler">
              <img id="navbarbrandicons"
                src={GithubImg}
                weign="40"
                height="40"
              />
            </a>
            <a href="https://www.linkedin.com/in/stevenmettler1">
              <img id="navbarbrandicons"
                src={LinkedinImg}
                weign="40"
                height="40"
              />
            </a>
          </NavbarBrand>
        </Navbar>
      </div>
    </>
  );
}
