import React from "react";
import Header from "../Pages/Shared/Header/Header";
import Footer from "../Pages/Shared/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import Banner from "../Pages/Shared/Banner/Banner";
import "../App.css";
import LeftNav from "../Pages/Shared/LeftNav/LeftNav";

const Main = () => {
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
            <h2 className="pt-3 pb-2 border-bottom">Our Chefs</h2>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </Container>
  );
};

export default Main;
