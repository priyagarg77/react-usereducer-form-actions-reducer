import React, { useReducer } from 'react';
import './style.css';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function App() {
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    repeatPassword: '',
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const { firstName, lastName, email, password, repeatPassword } = state;

  function reducer(state, action) {
    switch (action.type) {
      case 'changeValue':
        return { ...state, [action.field]: action.value };
      case 'reset':
        return initialState;
      default:
        throw new Error();
    }
  }

  const changeValue = (e) => {
    dispatch({
      type: 'changeValue',
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'reset' });
  };

  return (
    <Container>
      <Row>
        <Col sm={6}>
          <Form className="mt-5" onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="formBasicFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={firstName}
                placeholder="Enter first name"
                onChange={changeValue}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={lastName}
                placeholder="Enter last name"
                onChange={changeValue}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                placeholder="Enter email"
                onChange={changeValue}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={changeValue}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicRepeatPassword">
              <Form.Label>Retype Password</Form.Label>
              <Form.Control
                type="password"
                name="repeatPassword"
                value={repeatPassword}
                placeholder="Retype password"
                onChange={changeValue}
              />
            </Form.Group>

            <Button variant="dark" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
