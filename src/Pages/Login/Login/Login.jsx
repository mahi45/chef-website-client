import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <Container className="mx-auto w-50 border ps-4 pe-4 pb-4 mt-4">
      <h3 className="form-header">Login your account</h3>
      <Form className="myForm">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="email"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="dark" type="submit" className="w-100 fw-semibold fs-6">
          Login
        </Button>
        <br />
        <Form.Text className="text-secondary d-flex justify-content-center pt-2 pb-2">
          Don't have an account? <Link to="/register"> Register</Link>
        </Form.Text>
        <Form.Text className="text-success"></Form.Text>
        <Form.Text className="text-danger"></Form.Text>
      </Form>

      <div className="text-center mt-4 mb-3">
        <Button className="me-2" variant="outline-primary">
          <FaGoogle />
          Login with Google
        </Button>
        <Button variant="outline-secondary">
          <FaGithub></FaGithub> Login with Github
        </Button>
      </div>
    </Container>
  );
};

export default Login;
