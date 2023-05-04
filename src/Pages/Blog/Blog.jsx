import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Blog = () => {
  return (
    <Container className="mt-4 bg-light">
      <h2 className="text-center p-4 border border-bottom=2 mb-4">Blog Page</h2>
      <Row>
        <Col lg={6}>
          <div className="">
            <h4>
              Question: Differences between uncontrolled and controlled
              components
            </h4>
            <p>
              <span>
                <b>Ans: </b>
              </span>
              It is the ways to manage the state of form inputs and other UI
              components.control components state managed by react using props
              and state where uncontrolled components state managed by the
              browser.input value in controlled component store in state on the
              other side uncontrolled component stored in DOM.
            </p>
          </div>
          <div className="">
            <h4>Question: How to validate React props using PropTypes?</h4>
            <p>
              <span>
                <b>Ans: </b>
              </span>
              It is used to ensure that the props passed to a component are of
              the expected type and shape, which can help to catch errors early
              and make debugging easier.
            </p>
          </div>
        </Col>
        <Col lg={6}>
          <div className="">
            <h4>
              Question: Tell us the difference between nodejs and express js
            </h4>
            <p>
              <span>
                <b>Ans: </b>
              </span>
              Node.js is a runtime environment that allows JavaScript to be
              executed outside of a browser, while Express.js is a web framework
              that runs on top of Node.js.Node.js is a runtime environment that
              provides a wide range of functionalities, Express.js, on the other
              hand, is specifically designed for building web applications and
              APIs.
            </p>
          </div>
          <div className="">
            <h4>
              Question: What is a custom hook, and why will you create a custom
              hook?
            </h4>
            <p>
              <span>
                <b>Ans: </b>
              </span>
              A custom hook is a reusable piece of logic that encapsulates
              complex functionality in a way that can be easily shared across
              multiple React components. Custom hooks are created for many of
              the reason like, reusability,Abstraction,Testing,Code organization
              etc.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Blog;
