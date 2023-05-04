import React, { useEffect, useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const loc = useLocation();
  const [title, setTittle] = useState("");

  useEffect(() => {
    if (loc.pathname === "/") {
      document.title = `Star Chef`;
      setTittle(document.title);
    } else {
      document.title = `${loc.pathname.replace("/", "")}`;
      setTittle(document.title);
    }
    if (loc.state) {
      document.title = loc.state;
      setTittle(document.title);
    }
  }, [loc.pathname]);

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">Star Chef</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Link className="text-decoration-none ps-2 text-black" to="/">
                Home
              </Link>
              <Link className="text-decoration-none ps-2 text-black" to="/blog">
                Blog
              </Link>
            </Nav>
            <Nav>
              <Nav>
                <FaUserCircle style={{ fontSize: "2rem" }}></FaUserCircle>
              </Nav>
              <Nav.Link eventKey={2} href="#memes">
                <Button variant="secondary">Login</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
