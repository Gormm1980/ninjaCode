import React from "react";
import { FormControl, InputGroup, Button, Form } from "react-bootstrap";

function Contact() {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1>Contact page</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <InputGroup>
            <InputGroup.Text>With textarea</InputGroup.Text>
            <FormControl as="textarea" aria-label="With textarea" />
          </InputGroup>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}
export default Contact;
