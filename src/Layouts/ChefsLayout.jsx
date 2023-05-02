import React from "react";
import Header from "../Pages/Shared/Header/Header";
import Footer from "../Pages/Shared/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import Banner from "../Pages/Shared/Banner/Banner";
import "../App.css";
import LeftNav from "../Pages/Shared/LeftNav/LeftNav";
import { Outlet } from "react-router-dom";

const ChefsLayout = () => {
  return (
    <Container>
      <Header></Header>
      <Banner></Banner>
      <Container>
        <Row>
          <Col lg={3}>
            <LeftNav></LeftNav>
          </Col>
          <Col lg={9}>
            <Outlet></Outlet>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </Container>
  );
};

export default ChefsLayout;
