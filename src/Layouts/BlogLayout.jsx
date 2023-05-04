import React from "react";
import Header from "../Pages/Shared/Header/Header";
import Footer from "../Pages/Shared/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import "../App.css";
import { Outlet } from "react-router-dom";

const BlogLayout = () => {
  return (
    <div>
      <Container>
        <Header></Header>
        <Container>
          <Row>
            <Col lg={12}>
              <Outlet></Outlet>
            </Col>
          </Row>
        </Container>
        <Footer></Footer>
      </Container>
    </div>
  );
};

export default BlogLayout;
