import React, { useContext, useEffect, useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
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

  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/home">Star Chef</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Link className="menuClass" to="/home">
                Home
              </Link>
              <Link className="menuClass" to="/blog">
                Blog
              </Link>
            </Nav>
            <Nav className="align-items-center">
              {/* <Nav.Link>{user.displayName}</Nav.Link> */}
              {user && (
                <FaUserCircle style={{ fontSize: "2rem" }}></FaUserCircle>
              )}
              {user ? (
                <Button onClick={handleLogout} variant="secondary">
                  Logout
                </Button>
              ) : (
                <Link to="/login">
                  <Button variant="secondary">Login</Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
