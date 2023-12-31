import React from "react";
import Header from "../Pages/Shared/Header/Header";
import Footer from "../Pages/Shared/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import Banner from "../Pages/Shared/Banner/Banner";
import "../App.css";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <Container>
      <Header></Header>
      <Banner></Banner>
      <Container>
        <Row>
          <Col lg={12}>
            <Outlet></Outlet>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </Container>
  );
};

export default Main;
