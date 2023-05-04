import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../Providers/AuthProvider";

const Login = () => {
  const [loginError, setLoginError] = useState("");
  const { signIn, signInWithGoogle, signInWithGithub } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/home";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        //   const loggedEmail = result.email;
        console.log(loggedUser);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setLoginError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGithubSignIn = () => {
    signInWithGithub()
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Container className="mx-auto w-50 border ps-4 pe-4 pb-4 mt-4">
      <h3 className="form-header">Login your account</h3>
      <Form onSubmit={handleLogin} className="myForm">
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
            name="password"
            placeholder="Password"
            required
          />
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
        <Button
          onClick={handleGoogleSignIn}
          className="me-2"
          variant="outline-primary"
        >
          <FaGoogle />
          Login with Google
        </Button>
        <Button onClick={handleGithubSignIn} variant="outline-secondary">
          <FaGithub></FaGithub> Login with Github
        </Button>
      </div>
      <p className="text-danger">{loginError}</p>
    </Container>
  );
};

export default Login;
