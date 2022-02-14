import React, { useState, useEffect } from "react";
import logo from "assets/logo.svg";
import { Navbar, Nav } from "react-bootstrap";
import HeaderSlides from 'components/Slider/index';

//constants
import { HELP_CENTER, CONTACT } from "constants/index";

const Header = () => {
  let listener = null;
  const [userInitials, setInitials] = useState("TT");
  const [scrollState, setScrollState] = useState("top");
  useEffect(() => {
    listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 250) {
        if (scrollState !== "stick") {
          setScrollState("stick");
        }
      } else {
        if (scrollState !== "top") {
          setScrollState("top");
        }
      }
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [scrollState]);

  return (
    <header>
      <Navbar
        className={`${scrollState === "stick" && "stick"}`}
        expand="md"
        fixed="top"
        expand="lg"
      >
        <Navbar.Brand href="">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="">{HELP_CENTER}</Nav.Link>
            <Nav.Link className="n-border" href="#footer">
              {CONTACT}
            </Nav.Link>
            <div className="left-border d-none d-md-block"></div>
            <div className="avatar text-center d-none d-md-block">
              <span>{userInitials}</span>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <HeaderSlides />
    </header>
  );
};

export default Header;
