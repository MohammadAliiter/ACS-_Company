import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Form.css';

function FormData() {
  return (
    <Form className="custom-form">
      <h2 className="form-title">Ready to Pursue Opportunity?</h2>
      <p className="form-description">Every outcome starts with a conversation</p>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your full name" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" required />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="text" placeholder="Enter your phone number" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCompany">
        <Form.Label>Company Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your company name" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicOpportunity">
        <Form.Label>Tell us about your opportunity*</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Describe your opportunity" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicReferral">
        <Form.Label>How did you hear about us?*</Form.Label>
        <Form.Control as="textarea" rows={2} placeholder="Let us know how you found out about us" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="By checking this box, you consent to us storing and processing the information provided in accordance with our terms of Privacy Policy*" required />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default FormData;
