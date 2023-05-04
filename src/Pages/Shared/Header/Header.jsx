import React, { useContext, useEffect, useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const loc = useLocation();
  const [title, setTittle] = useState("");

  // const [currentUser, setCurrentUser] = useState(null);

  // useEffect((user) => {
  //   if (user) {
  //     setCurrentUser(cuser.displayName);
  //   } else {
  //     setCurrentUser(null);
  //   }
  // }, []);

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
              <NavLink className="menuClass" to="/home">
                Home
              </NavLink>
              <NavLink className="menuClass" to="/blog">
                Blog
              </NavLink>
            </Nav>
            <Nav className="align-items-center">
              {/* <Nav.Link>{displayName}</Nav.Link> */}
              {user && (
                <>
                  <img
                    src={user.photoURL}
                    alt=""
                    style={{ width: "2rem", marginRight: "8px" }}
                    className="rounded-circle"
                    title={user.displayName ? user.displayName : null}
                  />
                  {/* <FaUserCircle style={{ fontSize: "2rem" }}></FaUserCircle> */}
                </>
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
