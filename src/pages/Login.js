import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authenticateAction } from "../redux/actions/authenticateAction";

const Login = ({ setAuthenticate, to }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  // console.log("tototo", to);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const login = (event) => {
    event.preventDefault();
    console.log("login.js : login user function issue");
    // setAuthenticate(true);
    dispatch(authenticateAction.login(id, password))
    navigate("/");
  };

  return (
    <Container className="login-area">
      {/* <Form className="login-form" onSubmit={(event) => login(event)}> */}
      <Form className="login-form" onSubmit={login}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(event)=>setId(event.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(event)=>setPassword(event.target.value)}/>
        </Form.Group>

        <Button variant="danger" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
