import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './Industries.css';

const industries = [
  'Banking',
  'Education & Institutions',
  'Hi-Tech, Products & Platforms',
  'Insurance',
  'Manufacturing',
  'Professional Services',
  'Infrastructure',
  'Energy',
  'Retail & Consumer',
  'Telecom & Utilities',
  'Transportation & Logistics',
  'Travel & Hospitality'
];

function Industries() {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 }
  });

  return (
    <Container className="ind-main-class">
      <animated.div style={props}>
        <h1 className="ind-title">Industries</h1>
        <Row>
          {industries.map((industry, index) => (
            <Col md={4} sm={6} xs={12} key={index} className="industry-col">
              <Card className="industry-card">
                <Card.Body>
                  <Card.Title>{industry}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </animated.div>
    </Container>
  );
}

export default Industries;
