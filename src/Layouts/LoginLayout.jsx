import React from "react";
import Header from "../Pages/Shared/Header/Header";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import Footer from "../Pages/Shared/Footer/Footer";

const LoginLayout = () => {
  return (
    <Container>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </Container>
  );
};

export default LoginLayout;
